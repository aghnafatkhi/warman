'use client';

import React, { useState, useMemo } from 'react';
import { FULL_MENU, MENU_CATEGORIES, formatPrice, RESTAURANT_INFO } from '@/data/menu';
import { Search, X } from 'lucide-react';

export default function FullMenu() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

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

  return (
    <section
      id="menu"
      aria-label="Daftar Menu Warman"
      className="py-8 sm:py-12 bg-[#FAF8F5] border-t border-[#E8E2D5]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-5 sm:mb-6">
          <h2
            id="full-menu-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1C1917] tracking-tight"
          >
            Menu & Harga
          </h2>
          <p className="mt-0.5 text-xs sm:text-sm text-[#57534E]">
            Daftar harga resmi Warman Restaurant Kota Wisata.
          </p>
        </div>

        {/* Filter Controls: Horizontal Category Navigation & Search */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-3 border-b border-[#E8E2D5]">
          {/* Category Tabs: Mobile Horizontal Scroll with edge breathing space */}
          <div
            role="tablist"
            aria-label="Kategori Menu"
            className="flex items-center gap-1.5 overflow-x-auto pb-1.5 pt-0.5 scroll-touch scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0"
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
                  className={`px-3 py-2 text-xs sm:text-sm font-semibold rounded-md whitespace-nowrap transition-colors flex items-center gap-1.5 min-h-[40px] shrink-0 ${
                    isActive
                      ? 'bg-[#1C1917] text-white shadow-xs'
                      : 'bg-[#F2EFE9] text-[#57534E] hover:text-[#1C1917] active:bg-[#E2DDD3]'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded font-mono ${
                      isActive ? 'bg-white/20 text-white' : 'bg-black/5 text-[#78716C]'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Box: 16px text-base to prevent iOS Safari auto-zoom */}
          <div className="relative w-full sm:w-64">
            <label htmlFor="menu-search-input" className="sr-only">
              Cari nama makanan atau sambal
            </label>
            <div className="relative flex items-center">
              <Search className="absolute left-3 w-4 h-4 text-[#78716C] pointer-events-none" />
              <input
                type="text"
                id="menu-search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari menu..."
                className="w-full pl-9 pr-10 py-2.5 text-base sm:text-sm bg-white border border-[#DCD6C9] rounded-md focus:border-[#B83220] focus:ring-1 focus:ring-[#B83220] transition-colors placeholder:text-[#A8A29E] min-h-[44px]"
              />
              {searchQuery && (
                <button
                  type="button"
                  id="clear-menu-search"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-1 text-[#78716C] hover:text-[#1C1917] p-2 min-h-[40px] min-w-[40px] flex items-center justify-center"
                  aria-label="Hapus pencarian"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Search Results Filter Note */}
        {searchQuery && (
          <div className="mb-4 flex items-center justify-between text-xs text-[#57534E] bg-[#F5F2EB] px-3.5 py-2 rounded-md border border-[#E2DDD3]">
            <span>
              Ditemukan <strong>{filteredMenu.length}</strong> menu untuk &quot;{searchQuery}&quot;
            </span>
            <button
              onClick={() => setSearchQuery('')}
              className="text-xs font-semibold text-[#B83220] hover:underline p-1 min-h-[32px] flex items-center"
            >
              Hapus Filter
            </button>
          </div>
        )}

        {/* Empty State */}
        {filteredMenu.length === 0 && (
          <div className="py-8 text-center bg-white rounded-md border border-[#E2DDD3] p-5 max-w-sm mx-auto">
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
              className="mt-3 px-4 py-2 text-xs font-semibold text-white bg-[#1C1917] rounded-md hover:bg-[#292524] min-h-[40px]"
            >
              Tampilkan Semua Menu
            </button>
          </div>
        )}

        {/* Menu Layout: 2 Columns on Desktop, 1 Column on Mobile */}
        <div id="menu-list-container" className="space-y-6 sm:space-y-8">
          {categorizedSections.map((section) => (
            <div key={section.id} id={`section-${section.id}`} className="space-y-1 sm:space-y-2">
              {/* Category Header */}
              <div className="flex items-center justify-between border-b border-[#E8E2D5] pb-1.5 pt-2">
                <h3 className="text-sm sm:text-base font-bold text-[#1C1917] uppercase tracking-wider">
                  {section.label}
                </h3>
                <span className="text-xs text-[#78716C]">
                  {section.items.length} item
                </span>
              </div>

              {/* Items Grid (2 cols desktop, 1 col mobile) - Robust CSS Grid for Anchored Pricing */}
              <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-8">
                {section.items.map((item) => (
                  <article
                    key={item.id}
                    id={`menu-item-row-${item.id}`}
                    className="py-2.5 border-b border-[#EDE8DE] grid grid-cols-[1fr_auto] items-baseline gap-3"
                  >
                    <div className="min-w-0 pr-1">
                      <h4 className="font-bold text-sm sm:text-base text-[#1C1917] leading-snug">
                        {item.name}
                      </h4>

                      {item.description && (
                        <p className="mt-0.5 text-xs text-[#66615B] leading-relaxed">
                          {item.description}
                        </p>
                      )}
                    </div>

                    <div className="shrink-0 text-right">
                      <span className="font-bold text-sm sm:text-base text-[#1C1917] tabular-nums whitespace-nowrap">
                        {formatPrice(item.price)}
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tax Note */}
        <div className="mt-7 pt-3 border-t border-[#E8E2D5] flex flex-col min-[360px]:flex-row items-start min-[360px]:items-center justify-between gap-1 text-xs text-[#78716C]">
          <span>{RESTAURANT_INFO.taxNote}</span>
          <a
            href="#lokasi"
            className="font-semibold text-[#B83220] hover:underline"
          >
            Lihat Lokasi & Jam Buka
          </a>
        </div>
      </div>
    </section>
  );
}

