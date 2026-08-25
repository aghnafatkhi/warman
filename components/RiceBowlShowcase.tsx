'use client';

import React from 'react';
import Image from 'next/image';
import { FULL_MENU, formatPrice } from '@/data/menu';
import { ArrowRight } from 'lucide-react';

export default function RiceBowlShowcase() {
  const riceBowls = FULL_MENU.filter((item) => item.category === 'rice-bowl');

  return (
    <section
      id="rice-bowl"
      aria-label="Rice Bowl Warman"
      className="py-8 sm:py-12 bg-[#FAF8F5] border-t border-[#E8E2D5]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-5 sm:mb-6 gap-2">
          <div>
            <h2
              id="rice-bowl-heading"
              className="text-2xl sm:text-3xl font-extrabold text-[#1C1917] tracking-tight"
            >
              Rice Bowl
            </h2>
            <p className="mt-1 text-sm sm:text-base text-[#57534E]">
              Pilih Korek, Matah, Terasi, atau Cabe Ijo.
            </p>
          </div>

          <div className="text-xs text-[#57534E] self-start sm:self-auto bg-[#F2EFE9] px-2.5 py-1 rounded border border-[#E0DACF]">
            Telur mata sapi +Rp6.000
          </div>
        </div>

        {/* 4 Rice Bowl Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {riceBowls.map((bowl) => (
            <article
              key={bowl.id}
              id={`rice-bowl-card-${bowl.id}`}
              className="bg-white rounded-md border border-[#E2DDD3] overflow-hidden flex flex-col justify-between hover:border-[#D0C9BC] transition-colors"
            >
              <div>
                {/* Compact Image Container */}
                <div className="relative aspect-16/10 w-full bg-[#F5F2EB] overflow-hidden">
                  {bowl.image ? (
                    <Image
                      src={bowl.image}
                      alt={bowl.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  ) : null}
                </div>

                {/* Details */}
                <div className="p-3 sm:p-3.5">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-bold text-sm sm:text-base text-[#1C1917]">
                      {bowl.name}
                    </h3>
                    <span className="font-bold text-sm sm:text-base text-[#B83220] tabular-nums whitespace-nowrap">
                      {formatPrice(bowl.price)}
                    </span>
                  </div>

                  {bowl.description && (
                    <p className="mt-1 text-xs text-[#66615B] leading-relaxed">
                      {bowl.description}
                    </p>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Single CTA after grid */}
        <div className="mt-6 text-center">
          <a
            href="#menu"
            id="view-all-menu-cta"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#1C1917] bg-[#EFECE6] hover:bg-[#E2DDD3] active:bg-[#D5CFBF] transition-colors rounded-md border border-[#DCD6C9] min-h-[40px]"
          >
            <span>Lihat Semua Menu</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}

