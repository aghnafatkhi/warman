'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { RESTAURANT_INFO } from '@/data/menu';
import { Menu, X, MapPin, Phone } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    },
    [mobileMenuOpen]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 pt-[env(safe-area-inset-top,0px)] ${
        isScrolled
          ? 'bg-[#FAF8F5]/95 backdrop-blur-sm border-b border-[#E8E2D5] shadow-xs py-2 sm:py-2.5'
          : 'bg-[#FAF8F5]/90 backdrop-blur-xs border-b border-transparent py-2.5 sm:py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Wordmark */}
        <a
          href="#main-content"
          id="header-brand-logo"
          className="group flex flex-col items-start focus-visible:outline-hidden py-0.5 min-h-[44px] justify-center"
          aria-label="Warman Restaurant Homepage"
        >
          <div className="flex items-center gap-1.5">
            <span className="font-extrabold text-xl sm:text-2xl tracking-wider text-[#1C1917] group-hover:text-[#B83220] transition-colors font-sans">
              {RESTAURANT_INFO.brandName}
            </span>
          </div>
          <span className="text-[10px] sm:text-[11px] text-[#78716C] tracking-wider uppercase font-medium">
            Kota Wisata · Cileungsi
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav
          id="desktop-navigation"
          aria-label="Navigasi Utama"
          className="hidden md:flex items-center space-x-1 lg:space-x-3"
        >
          <a
            href="#rice-bowl"
            id="nav-rice-bowl"
            className="px-3 py-1.5 text-xs lg:text-sm font-semibold text-[#44403C] hover:text-[#B83220] hover:bg-[#F0ECE4] transition-colors rounded-md min-h-[40px] flex items-center"
          >
            Rice Bowl
          </a>
          <a
            href="#menu"
            id="nav-menu"
            className="px-3 py-1.5 text-xs lg:text-sm font-semibold text-[#44403C] hover:text-[#B83220] hover:bg-[#F0ECE4] transition-colors rounded-md min-h-[40px] flex items-center"
          >
            Menu & Harga
          </a>
          <a
            href="#sambal"
            id="nav-sambal"
            className="px-3 py-1.5 text-xs lg:text-sm font-semibold text-[#44403C] hover:text-[#B83220] hover:bg-[#F0ECE4] transition-colors rounded-md min-h-[40px] flex items-center"
          >
            Sambal
          </a>
          <a
            href="#lokasi"
            id="nav-lokasi"
            className="px-3 py-1.5 text-xs lg:text-sm font-semibold text-[#44403C] hover:text-[#B83220] hover:bg-[#F0ECE4] transition-colors rounded-md min-h-[40px] flex items-center"
          >
            Lokasi
          </a>
        </nav>

        {/* Header Quick CTAs */}
        <div className="hidden sm:flex items-center gap-2">
          <a
            href={RESTAURANT_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="header-cta-maps"
            className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#292524] bg-[#EFECE6] hover:bg-[#E4DFD5] active:bg-[#D9D3C7] transition-colors rounded-md border border-[#DCD6C9] min-h-[38px] whitespace-nowrap"
          >
            <MapPin className="w-3.5 h-3.5 text-[#B83220]" />
            <span>Buka Maps</span>
          </a>

          <a
            href="#menu"
            id="header-cta-menu"
            className="inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-[#B83220] hover:bg-[#9E2818] active:bg-[#852012] transition-colors rounded-md shadow-xs min-h-[38px] whitespace-nowrap"
          >
            <span>Lihat Menu</span>
          </a>
        </div>

        {/* Mobile Menu Trigger - 44x44px touch target */}
        <button
          type="button"
          id="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-nav-menu"
          aria-label={mobileMenuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
          className="md:hidden inline-flex items-center justify-center p-2.5 rounded-md text-[#1C1917] hover:bg-[#EFECE6] active:bg-[#E2DDD3] focus-visible:outline-hidden min-h-[44px] min-w-[44px]"
        >
          {mobileMenuOpen ? (
            <X className="w-5 h-5" aria-hidden="true" />
          ) : (
            <Menu className="w-5 h-5" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-backdrop"
          className="fixed inset-x-0 top-full h-[calc(100vh-100%)] bg-black/40 backdrop-blur-xs z-40 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        >
          <div
            id="mobile-nav-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu Navigasi Mobile"
            className="bg-[#FAF8F5] border-b border-[#E8E2D5] px-4 pt-2 pb-6 space-y-3 shadow-lg max-h-[80vh] overflow-y-auto pb-[calc(1.5rem+env(safe-area-inset-bottom,0px))]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col space-y-0.5">
              <a
                href="#rice-bowl"
                id="mobile-nav-link-rice-bowl"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 text-sm font-semibold text-[#1C1917] hover:bg-[#EFECE6] active:bg-[#E2DDD3] rounded-md transition-colors min-h-[44px] flex items-center"
              >
                Rice Bowl
              </a>
              <a
                href="#menu"
                id="mobile-nav-link-menu"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 text-sm font-semibold text-[#1C1917] hover:bg-[#EFECE6] active:bg-[#E2DDD3] rounded-md transition-colors min-h-[44px] flex items-center"
              >
                Menu & Harga
              </a>
              <a
                href="#sambal"
                id="mobile-nav-link-sambal"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 text-sm font-semibold text-[#1C1917] hover:bg-[#EFECE6] active:bg-[#E2DDD3] rounded-md transition-colors min-h-[44px] flex items-center"
              >
                Pilihan Sambal
              </a>
              <a
                href="#lokasi"
                id="mobile-nav-link-lokasi"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 text-sm font-semibold text-[#1C1917] hover:bg-[#EFECE6] active:bg-[#E2DDD3] rounded-md transition-colors min-h-[44px] flex items-center"
              >
                Lokasi & Jam Buka
              </a>
            </div>

            <div className="pt-2 border-t border-[#E8E2D5] flex flex-col gap-2">
              <a
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="mobile-cta-maps"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-md font-semibold text-xs min-[360px]:text-sm text-[#1C1917] bg-[#EFECE6] border border-[#DCD6C9] active:bg-[#E0DACF] min-h-[44px] whitespace-nowrap"
              >
                <MapPin className="w-4 h-4 text-[#B83220]" />
                <span>Buka Maps</span>
              </a>

              <a
                href={`tel:${RESTAURANT_INFO.phone.replace(/[^0-9]/g, '')}`}
                id="mobile-cta-phone"
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-md font-semibold text-xs min-[360px]:text-sm text-white bg-[#1C1917] hover:bg-[#292524] active:bg-black min-h-[44px] whitespace-nowrap"
              >
                <Phone className="w-4 h-4" />
                <span>Telepon ({RESTAURANT_INFO.phone})</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

