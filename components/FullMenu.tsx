'use client';

import React, { useState, useMemo } from 'react';
import { FULL_MENU, MENU_CATEGORIES, formatPrice, MenuItem, RESTAURANT_INFO } from '@/data/menu';
import { Search, X, Plus, Minus, Phone, Check, Copy, Calculator } from 'lucide-react';

interface CartItem {
  item: MenuItem;
  quantity: number;
  withEgg?: boolean;
}

export default function FullMenu() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [cart, setCart] = useState<Record<string, CartItem>>({});
  const [calculatorOpen, setCalculatorOpen] = useState<boolean>(false);
  const [copiedOrder, setCopiedOrder] = useState<boolean>(false);

  // Filtered menu
  const filteredMenu = useMemo(() => {
    return FULL_MENU.filter((item) => {
      const matchesCategory =
        activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.description &&
          item.description.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Grouped items by category for structured layout
  const categorizedSections = useMemo(() => {
    const categoriesInOrder = MENU_CATEGORIES.filter((c) => c.id !== 'all');
    return categoriesInOrder
      .map((category) => {
        const items = filteredMenu.filter((item) => item.category === category.id);
        return {
          ...category,
          items,
        };
      })
      .filter((cat) => cat.items.length > 0);
  }, [filteredMenu]);

  // Add/Remove item from simulation
  const handleAddToCart = (item: MenuItem) => {
    setCart((prev) => {
      const existing = prev[item.id];
      if (existing) {
        return {
          ...prev,
          [item.id]: {
            ...existing,
            quantity: existing.quantity + 1,
          },
        };
      }
      return {
        ...prev,
        [item.id]: {
          item,
          quantity: 1,
          withEgg: false,
        },
      };
    });
  };

  const handleDecreaseQuantity = (itemId: string) => {
    setCart((prev) => {
      const existing = prev[itemId];
      if (!existing) return prev;
      if (existing.quantity <= 1) {
        const next = { ...prev };
        delete next[itemId];
        return next;
      }
      return {
        ...prev,
        [itemId]: {
          ...existing,
          quantity: existing.quantity - 1,
        },
      };
    });
  };

  const handleToggleEgg = (itemId: string) => {
    setCart((prev) => {
      const existing = prev[itemId];
      if (!existing) return prev;
      return {
        ...prev,
        [itemId]: {
          ...existing,
          withEgg: !existing.withEgg,
        },
      };
    });
  };

  const handleClearCart = () => {
    setCart({});
  };

  // Calculations
  const cartItemsList = Object.values(cart);
  const totalItemCount = cartItemsList.reduce((sum, entry) => sum + entry.quantity, 0);

  const subtotal = cartItemsList.reduce((sum, entry) => {
    const itemTotal = entry.item.price * entry.quantity;
    const eggTotal = (entry.withEgg ? 6000 : 0) * entry.quantity;
    return sum + itemTotal + eggTotal;
  }, 0);

  const tax = Math.round(subtotal * 0.1);
  const grandTotal = subtotal + tax;

  const handleCopyOrder = () => {
    if (cartItemsList.length === 0) return;
    let text = `*Daftar Pesanan — Warman Restaurant*\n`;
    cartItemsList.forEach((entry, idx) => {
      text += `${idx + 1}. ${entry.item.name} (${entry.quantity}x)${
        entry.withEgg ? ' + Telur Mata Sapi' : ''
      } = ${formatPrice((entry.item.price + (entry.withEgg ? 6000 : 0)) * entry.quantity)}\n`;
    });
    text += `\nSubtotal: ${formatPrice(subtotal)}`;
    text += `\nPajak Restoran (10%): ${formatPrice(tax)}`;
    text += `\n*Total Estimasi: ${formatPrice(grandTotal)}*`;
    text += `\n\nLokasi: ${RESTAURANT_INFO.address.full}`;

    navigator.clipboard.writeText(text);
    setCopiedOrder(true);
    setTimeout(() => setCopiedOrder(false), 2000);
  };

  return (
    <section
      id="menu"
      aria-label="Daftar Menu Warman"
      className="py-10 sm:py-14 lg:py-16 bg-[#FAF8F5] border-t border-[#E8E2D5]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="text-xs font-bold tracking-widest text-[#B83220] uppercase mb-1">
              Daftar Menu
            </div>
            <h2
              id="full-menu-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1C1917] tracking-tight"
            >
              Menu & Harga
            </h2>
            <p className="mt-1 text-sm sm:text-base text-[#57534E]">
              Pilihan lauk goreng, rice bowl, aneka sambal, tumisan sayur, serta savory dan sweet bites.
            </p>
          </div>

          {/* Quick simulator toggle button */}
          <button
            type="button"
            onClick={() => setCalculatorOpen(!calculatorOpen)}
            id="toggle-calculator-btn"
            className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-md border border-[#DCD6C9] bg-white hover:bg-[#F2EFE9] text-[#1C1917] self-start md:self-auto transition-colors"
          >
            <Calculator className="w-3.5 h-3.5 text-[#B83220]" />
            <span>
              {totalItemCount > 0
                ? `Simulasi Pesanan (${totalItemCount} item)`
                : 'Hitung Estimasi Total'}
            </span>
          </button>
        </div>

        {/* Filter Controls: Horizontal Categories & Live Search */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 mb-8 pb-4 border-b border-[#E8E2D5]">
          {/* Category Tabs */}
          <div
            role="tablist"
            aria-label="Kategori Menu"
            className="flex items-center gap-1.5 overflow-x-auto pb-1 lg:pb-0 scroll-touch scrollbar-none"
          >
            {MENU_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              const count =
                cat.id === 'all'
                  ? FULL_MENU.length
                  : FULL_MENU.filter((item) => item.category === cat.id).length;

              return (
                <button
                  key={cat.id}
                  role="tab"
                  id={`tab-${cat.id}`}
                  aria-selected={isActive}
                  aria-controls="menu-list-container"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-md whitespace-nowrap transition-colors flex items-center gap-1.5 min-h-[40px] ${
                    isActive
                      ? 'bg-[#1C1917] text-white shadow-xs'
                      : 'bg-[#F2EFE9] text-[#57534E] hover:text-[#1C1917] hover:bg-[#E8E4DC]'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded ${
                      isActive ? 'bg-white/20 text-white' : 'bg-black/5 text-[#78716C]'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full lg:w-72">
            <label htmlFor="menu-search-input" className="sr-only">
              Cari nama makanan atau sambal
            </label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#78716C]" />
              <input
                type="text"
                id="menu-search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari menu (paru, dori, cireng)..."
                className="w-full pl-9 pr-8 py-2 text-xs sm:text-sm bg-white border border-[#DCD6C9] rounded-md focus:border-[#B83220] focus:ring-1 focus:ring-[#B83220] transition-colors placeholder:text-[#A8A29E]"
              />
              {searchQuery && (
                <button
                  type="button"
                  id="clear-menu-search"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#78716C] hover:text-[#1C1917] p-1"
                  aria-label="Hapus teks pencarian"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Search Results Filter Note */}
        {searchQuery && (
          <div className="mb-6 flex items-center justify-between text-xs sm:text-sm text-[#57534E] bg-[#F5F2EB] px-3.5 py-2 rounded-md border border-[#E2DDD3]">
            <span>
              Ditemukan <strong>{filteredMenu.length}</strong> menu untuk kata kunci &quot;{searchQuery}&quot;
            </span>
            <button
              onClick={() => setSearchQuery('')}
              className="text-xs font-semibold text-[#B83220] hover:underline"
            >
              Hapus Filter
            </button>
          </div>
        )}

        {/* Empty State */}
        {filteredMenu.length === 0 && (
          <div className="py-12 text-center bg-white rounded-md border border-[#E2DDD3] p-6 max-w-sm mx-auto">
            <p className="font-bold text-sm text-[#1C1917]">
              Menu tidak ditemukan
            </p>
            <p className="mt-1 text-xs text-[#78716C]">
              Tidak ada hasil yang sesuai dengan kata kunci &quot;{searchQuery}&quot;.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="mt-3 px-3.5 py-1.5 text-xs font-semibold text-white bg-[#1C1917] rounded-md hover:bg-[#292524]"
            >
              Tampilkan Semua Menu
            </button>
          </div>
        )}

        {/* Menu Layout: Editorial Typographic 2-Column List on Desktop, 1-Column on Mobile */}
        <div id="menu-list-container" className="space-y-10">
          {categorizedSections.map((section) => (
            <div key={section.id} id={`section-${section.id}`} className="space-y-3">
              {/* Category Header */}
              <div className="flex items-center justify-between border-b border-[#E8E2D5] pb-2">
                <h3 className="text-base sm:text-lg font-bold text-[#1C1917] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B83220]"></span>
                  <span>{section.label}</span>
                </h3>
                <span className="text-xs font-medium text-[#78716C]">
                  {section.items.length} item
                </span>
              </div>

              {/* Typographic Items Grid (2 columns on desktop) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                {section.items.map((item) => {
                  const inCart = cart[item.id];

                  return (
                    <article
                      key={item.id}
                      id={`menu-item-row-${item.id}`}
                      className="py-2.5 border-b border-[#EDE8DE] hover:border-[#D5CFC2] transition-colors flex items-start justify-between gap-3 group"
                    >
                      <div className="flex-1 pr-2">
                        {/* Title & Portion */}
                        <div className="flex items-baseline flex-wrap gap-x-2">
                          <h4 className="font-bold text-sm sm:text-base text-[#1C1917] group-hover:text-[#B83220] transition-colors">
                            {item.name}
                          </h4>
                          {item.portionNote && (
                            <span className="text-[11px] font-medium text-[#78716C] bg-[#F2EFE9] px-1.5 py-0.2 rounded">
                              {item.portionNote}
                            </span>
                          )}
                        </div>

                        {/* Description */}
                        {item.description && (
                          <p className="mt-0.5 text-xs text-[#66615B] leading-relaxed">
                            {item.description}
                          </p>
                        )}

                        {/* Sambal note */}
                        {item.sambalOptions && (
                          <div className="mt-1 text-[11px] text-[#1E3A2B] font-medium">
                            Pilihan: Korek, Matah, Terasi, Cabe Ijo
                          </div>
                        )}

                        {item.addOnOption && (
                          <div className="mt-0.5 text-[11px] text-[#78716C]">
                            Add-on: {item.addOnOption}
                          </div>
                        )}
                      </div>

                      {/* Price & Simulation Control */}
                      <div className="flex items-center shrink-0 gap-2.5">
                        <span className="font-bold text-sm sm:text-base text-[#1C1917] tabular-nums whitespace-nowrap">
                          {formatPrice(item.price)}
                        </span>

                        {/* Counter button */}
                        <div className="flex items-center">
                          {inCart ? (
                            <div className="flex items-center bg-[#F2EFE9] border border-[#DCD6C9] rounded">
                              <button
                                type="button"
                                id={`dec-${item.id}`}
                                onClick={() => handleDecreaseQuantity(item.id)}
                                className="p-1.5 hover:bg-[#E4DFD5] text-[#44403C] transition-colors min-w-[28px] min-h-[28px] flex items-center justify-center"
                                aria-label={`Kurangi 1 ${item.name}`}
                              >
                                <Minus className="w-3.5 h-3.5" />
                              </button>
                              <span className="px-1.5 text-xs font-bold text-[#1C1917] tabular-nums min-w-[16px] text-center">
                                {inCart.quantity}
                              </span>
                              <button
                                type="button"
                                id={`inc-${item.id}`}
                                onClick={() => handleAddToCart(item)}
                                className="p-1.5 hover:bg-[#E4DFD5] text-[#44403C] transition-colors min-w-[28px] min-h-[28px] flex items-center justify-center"
                                aria-label={`Tambah 1 ${item.name}`}
                              >
                                <Plus className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          ) : (
                            <button
                              type="button"
                              id={`add-${item.id}`}
                              onClick={() => handleAddToCart(item)}
                              className="p-1.5 text-xs font-semibold text-[#57534E] hover:text-[#1C1917] hover:bg-[#F2EFE9] rounded border border-transparent hover:border-[#DCD6C9] transition-colors flex items-center justify-center min-w-[32px] min-h-[32px]"
                              title="Tambahkan ke simulasi hitung"
                              aria-label={`Pilih ${item.name}`}
                            >
                              <Plus className="w-4 h-4 text-[#B83220]" />
                            </button>
                          )}
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Clear Tax Note & Take-Away Hotline */}
        <div className="mt-8 pt-4 border-t border-[#E8E2D5] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-[#78716C]">
          <div className="flex items-center gap-1.5">
            <span className="font-semibold text-[#1C1917]">Catatan:</span>
            <span>{RESTAURANT_INFO.taxNote}</span>
          </div>
          <div>
            Pesanan langsung / konfirmasi meja:{' '}
            <a
              href={`tel:${RESTAURANT_INFO.phone.replace(/[^0-9]/g, '')}`}
              className="font-bold text-[#1C1917] hover:text-[#B83220] transition-colors"
            >
              {RESTAURANT_INFO.phone}
            </a>
          </div>
        </div>

        {/* Simulation / Calculator Panel (when items selected or toggled) */}
        {calculatorOpen && (
          <div
            id="order-calculator-panel"
            className="mt-8 bg-white rounded-lg border border-[#DCD6C9] p-4 sm:p-6 shadow-sm max-w-2xl mx-auto"
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#EDE8DE]">
              <div className="flex items-center gap-2">
                <Calculator className="w-4 h-4 text-[#B83220]" />
                <h4 className="font-bold text-sm sm:text-base text-[#1C1917]">
                  Simulasi Rincian Pesanan
                </h4>
              </div>
              <div className="flex items-center gap-2">
                {cartItemsList.length > 0 && (
                  <button
                    type="button"
                    onClick={handleClearCart}
                    className="text-xs text-[#78716C] hover:text-red-600 transition-colors"
                  >
                    Kosongkan
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => setCalculatorOpen(false)}
                  className="text-xs text-[#78716C] hover:text-[#1C1917] p-1"
                  aria-label="Tutup panel simulasi"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {cartItemsList.length === 0 ? (
              <p className="py-4 text-center text-xs text-[#78716C]">
                Belum ada menu yang dipilih. Klik tanda <strong>+</strong> pada menu untuk menghitung estimasi subtotal dan pajak 10%.
              </p>
            ) : (
              <div className="pt-3 space-y-3">
                <div className="space-y-2 max-h-52 overflow-y-auto pr-1">
                  {cartItemsList.map((entry) => (
                    <div
                      key={entry.item.id}
                      className="flex items-center justify-between text-xs py-1 border-b border-[#F5F2EB]"
                    >
                      <div className="flex-1 pr-2">
                        <span className="font-medium text-[#1C1917]">
                          {entry.quantity}x {entry.item.name}
                        </span>
                        {entry.item.category === 'rice-bowl' && (
                          <button
                            type="button"
                            onClick={() => handleToggleEgg(entry.item.id)}
                            className={`ml-2 text-[10px] px-1.5 py-0.2 rounded ${
                              entry.withEgg
                                ? 'bg-amber-100 text-amber-900 font-semibold'
                                : 'text-[#78716C] hover:text-[#1C1917]'
                            }`}
                          >
                            {entry.withEgg ? '✓ Telur (+Rp6.000)' : '+ Telur (+Rp6.000)'}
                          </button>
                        )}
                      </div>
                      <span className="font-bold tabular-nums text-[#1C1917]">
                        {formatPrice(
                          (entry.item.price + (entry.withEgg ? 6000 : 0)) * entry.quantity
                        )}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 border-t border-[#EDE8DE] text-xs space-y-1">
                  <div className="flex justify-between text-[#57534E]">
                    <span>Subtotal</span>
                    <span className="tabular-nums font-semibold">{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-[#57534E]">
                    <span>Pajak Restoran (10%)</span>
                    <span className="tabular-nums font-semibold">{formatPrice(tax)}</span>
                  </div>
                  <div className="flex justify-between text-sm font-bold text-[#1C1917] pt-1 border-t border-[#EDE8DE]">
                    <span>Estimasi Total</span>
                    <span className="text-[#B83220] tabular-nums font-extrabold">{formatPrice(grandTotal)}</span>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-2">
                  <button
                    type="button"
                    onClick={handleCopyOrder}
                    className="flex-1 py-2 px-3 text-xs font-semibold bg-[#F2EFE9] hover:bg-[#E8E4DC] text-[#1C1917] rounded flex items-center justify-center gap-1.5 transition-colors border border-[#DCD6C9]"
                  >
                    {copiedOrder ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700 font-bold">Rincian Tersalin!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-[#57534E]" />
                        <span>Salin Rincian Pesanan</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`tel:${RESTAURANT_INFO.phone.replace(/[^0-9]/g, '')}`}
                    className="py-2 px-4 text-xs font-semibold bg-[#1C1917] hover:bg-[#292524] text-white rounded flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Hubungi Restoran</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
