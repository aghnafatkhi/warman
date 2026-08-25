'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { RESTAURANT_INFO } from '@/data/menu';
import { Menu, X, MapPin, Phone, ArrowUpRight } from 'lucide-react';

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

  // Close mobile menu on Escape key press
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

  // Lock body scroll when mobile menu is open
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#FAF8F5]/95 backdrop-blur-sm border-b border-[#E8E2D5] shadow-xs py-2.5 sm:py-3'
          : 'bg-[#FAF8F5]/85 backdrop-blur-xs border-b border-transparent py-3.5 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Wordmark */}
        <a
          href="#main-content"
          id="header-brand-logo"
          className="group flex flex-col items-start focus-visible:outline-hidden py-1 min-h-[44px] justify-center"
          aria-label="Warman Restaurant Homepage"
        >
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-xl sm:text-2xl tracking-wider text-[#1C1917] group-hover:text-[#B83220] transition-colors font-sans">
              {RESTAURANT_INFO.brandName}
            </span>
            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#1C1917] text-white tracking-wider uppercase">
              Restoran
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
            href="#menu"
            id="nav-menu"
            className="px-3 py-1.5 text-sm font-semibold text-[#44403C] hover:text-[#B83220] hover:bg-[#F0ECE4] transition-colors rounded-md"
          >
            Menu
          </a>
          <a
            href="#sambal"
            id="nav-sambal"
            className="px-3 py-1.5 text-sm font-semibold text-[#44403C] hover:text-[#B83220] hover:bg-[#F0ECE4] transition-colors rounded-md"
          >
            Pilihan Sambal
          </a>
          <a
            href="#rice-bowl"
            id="nav-rice-bowl"
            className="px-3 py-1.5 text-sm font-semibold text-[#44403C] hover:text-[#B83220] hover:bg-[#F0ECE4] transition-colors rounded-md"
          >
            Rice Bowl
          </a>
          <a
            href="#lokasi"
            id="nav-lokasi"
            className="px-3 py-1.5 text-sm font-semibold text-[#44403C] hover:text-[#B83220] hover:bg-[#F0ECE4] transition-colors rounded-md"
          >
            Lokasi & Jam Buka
          </a>
        </nav>

        {/* Header Quick CTAs */}
        <div className="hidden sm:flex items-center gap-2.5">
          <a
            href={RESTAURANT_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="header-cta-maps"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs lg:text-sm font-semibold text-[#292524] bg-[#EFECE6] hover:bg-[#E4DFD5] active:bg-[#D9D3C7] transition-colors rounded-md border border-[#DCD6C9]"
          >
            <MapPin className="w-3.5 h-3.5 text-[#B83220]" />
            <span>Petunjuk Arah</span>
          </a>

          <a
            href="#menu"
            id="header-cta-menu"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs lg:text-sm font-semibold text-white bg-[#B83220] hover:bg-[#9E2818] active:bg-[#852012] transition-colors rounded-md shadow-xs"
          >
            <span>Lihat Menu</span>
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          type="button"
          id="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-nav-menu"
          aria-label={mobileMenuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
          className="md:hidden inline-flex items-center justify-center p-2.5 rounded-md text-[#1C1917] hover:bg-[#EFECE6] focus-visible:outline-hidden min-h-[44px] min-w-[44px]"
        >
          {mobileMenuOpen ? (
            <X className="w-5 h-5" aria-hidden="true" />
          ) : (
            <Menu className="w-5 h-5" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile Drawer Navigation with Background Overlay */}
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
            className="bg-[#FAF8F5] border-b border-[#E8E2D5] px-4 pt-3 pb-6 space-y-4 shadow-lg max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col space-y-1">
              <a
                href="#menu"
                id="mobile-nav-link-menu"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-3 text-base font-semibold text-[#1C1917] hover:bg-[#EFECE6] rounded-md transition-colors flex items-center justify-between"
              >
                <span>Daftar Menu</span>
                <span className="text-xs text-[#78716C]">Lengkap</span>
              </a>
              <a
                href="#sambal"
                id="mobile-nav-link-sambal"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-3 text-base font-semibold text-[#1C1917] hover:bg-[#EFECE6] rounded-md transition-colors flex items-center justify-between"
              >
                <span>4 Pilihan Sambal</span>
                <span className="text-xs text-[#B83220]">Khas</span>
              </a>
              <a
                href="#rice-bowl"
                id="mobile-nav-link-rice-bowl"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-3 text-base font-semibold text-[#1C1917] hover:bg-[#EFECE6] rounded-md transition-colors flex items-center justify-between"
              >
                <span>Rice Bowl</span>
                <span className="text-xs text-[#78716C]">Mulai Rp21.000</span>
              </a>
              <a
                href="#lokasi"
                id="mobile-nav-link-lokasi"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-3 text-base font-semibold text-[#1C1917] hover:bg-[#EFECE6] rounded-md transition-colors flex items-center justify-between"
              >
                <span>Lokasi & Jam Buka</span>
                <span className="text-xs text-[#1E3A2B]">10.00–22.00</span>
              </a>
            </div>

            <div className="pt-3 border-t border-[#E8E2D5] flex flex-col gap-2.5">
              <a
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="mobile-cta-maps"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-md font-semibold text-sm text-[#1C1917] bg-[#EFECE6] border border-[#DCD6C9] active:bg-[#E0DACF] min-h-[44px]"
              >
                <MapPin className="w-4 h-4 text-[#B83220]" />
                <span>Petunjuk Arah (Google Maps)</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#78716C]" />
              </a>

              <a
                href={`tel:${RESTAURANT_INFO.phone.replace(/[^0-9]/g, '')}`}
                id="mobile-cta-phone"
                className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-md font-semibold text-sm text-white bg-[#1C1917] hover:bg-[#292524] active:bg-black min-h-[44px]"
              >
                <Phone className="w-4 h-4" />
                <span>Hubungi {RESTAURANT_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
