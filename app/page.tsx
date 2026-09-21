"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Search, Gem, Home, PlayCircle, Bookmark, User } from "lucide-react";

const MENUS = ["Discover", "New", "Ranking", "Category", "Exclusive"];

const TRENDING_DRAMAS = [
  {
    id: 1,
    title: "My Future Child",
    genre: "Drama",
    image: "https://fastpix.vplushort.com/a/480/plain/catalog/1789729123_the-ace-they-thought-was-dead-S1-POSTER%20EN.jpg",
    isExclusive: true,
  },
  {
    id: 2,
    title: "I Love My Boss",
    genre: "Romance",
    image: "https://fastpix.vplushort.com/a/480/plain/catalog/1789806875_boss-up-my-ceo-S1-POSTER%20EN.jpg",
    isExclusive: true,
  },
  {
    id: 3,
    title: "Obsession",
    genre: "Drama",
    image: "https://fastpix.vplushort.com/a/480/plain/catalog/1788523761_my-best-friends-hot-daddy-S1-POSTER.jpg",
    isExclusive: true,
  },
  {
    id: 4,
    title: "Flash Marriage Tycoon: Don't...",
    genre: "Drama",
    image: "https://fastpix.vplushort.com/a/480/plain/catalog/1789625175_first-marriage-bliss-S1-POSTER%20EN.jpg",
    isExclusive: true,
  },
  {
    id: 5,
    title: "It's Over I am Surrounded B...",
    genre: "Family",
    image: "https://fastpix.vplushort.com/a/480/plain/catalog/1789204657_the-crazy-sister-who-stole-my-husband-S1-POSTER%20EN.jpg",
    isExclusive: true,
  },
  {
    id: 6,
    title: "Love Across Time And Spa...",
    genre: "Drama",
    image: "https://fastpix.vplushort.com/a/480/plain/catalog/1789924036_divorced-to-build-my-queendom-S1-POSTER%20EN.jpg",
    isExclusive: true,
  },
];

export default function VPlusShortApp() {
  const [activeMenu, setActiveMenu] = useState("Discover");
  const [activeNav, setActiveNav] = useState("Beranda");

  return (
    <div className="bg-black min-h-screen flex justify-center text-white antialiased">
      {/* Container Viewport Smartphone */}
      <div className="w-full max-w-[420px] bg-[#121212] min-h-screen flex flex-col pb-20 relative border-x border-zinc-800/80 shadow-2xl">
        
        {/* HEADER */}
        <header className="sticky top-0 z-50 bg-[#121212]/95 backdrop-blur-md pt-3">
          {/* Top Bar */}
          <div className="px-4 pb-2 flex items-center justify-between">
            <div className="flex items-center gap-0.5 font-bold text-2xl tracking-tight">
              <span className="text-rose-500">V</span>
              <span className="text-rose-500">+</span>
              <span className="text-white">Short</span>
            </div>
            <div className="flex items-center gap-4 text-zinc-300">
              <button aria-label="Search"><Search className="w-5 h-5 text-zinc-200" /></button>
              <button aria-label="VIP"><Gem className="w-5 h-5 text-zinc-200" /></button>
            </div>
          </div>

          {/* Navigation Tabs */}
          <nav className="flex items-center gap-6 overflow-x-auto no-scrollbar px-4 py-2 text-sm border-b border-zinc-800/50">
            {MENUS.map((menu) => {
              const isActive = activeMenu === menu;
              return (
                <button
                  key={menu}
                  onClick={() => setActiveMenu(menu)}
                  className={`whitespace-nowrap relative pb-2 transition-all font-medium ${
                    isActive ? "text-white font-semibold" : "text-zinc-400 hover:text-zinc-200"
                  }`}
                >
                  {menu}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-rose-500 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>
        </header>

        {/* MAIN CONTENT */}
        <main className="px-3 pt-4 space-y-3.5 flex-1">
          {/* SECTION TITLE */}
          <div className="flex items-center gap-1.5 px-1">
            <h2 className="text-base font-bold text-white tracking-wide">Trending</h2>
            <span className="text-base">🔥</span>
          </div>

          {/* GRID DRAMA CARDS (3 COLUMNS) */}
          <div className="grid grid-cols-3 gap-2">
            {TRENDING_DRAMAS.map((drama) => (
              <div
                key={drama.id}
                className="bg-[#1c1c1e] rounded-xl overflow-hidden flex flex-col cursor-pointer group border border-zinc-800/30"
              >
                {/* Poster Image Container */}
                <div className="relative aspect-[3/4] w-full bg-zinc-900">
                  <Image
                    src={drama.image}
                    alt={drama.title}
                    fill
                    sizes="(max-width: 420px) 33vw, 130px"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* EXCLUSIVE BADGE */}
                  {drama.isExclusive && (
                    <span className="absolute top-1.5 right-1.5 bg-black/40 backdrop-blur-md text-[8px] font-semibold px-1.5 py-0.5 rounded text-zinc-200 tracking-wider uppercase">
                      EXCLUSIVE
                    </span>
                  )}
                </div>

                {/* Info Container */}
                <div className="p-2 flex flex-col justify-between flex-1">
                  <h3 className="text-[11px] font-medium text-zinc-100 line-clamp-2 leading-tight">
                    {drama.title}
                  </h3>
                  <p className="text-[9px] text-zinc-500 mt-1 font-normal">
                    {drama.genre}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </main>

        {/* BOTTOM NAVIGATION */}
        <footer className="fixed bottom-0 w-full max-w-[420px] bg-[#121212]/95 backdrop-blur-lg border-t border-zinc-800/60 px-6 py-2.5 flex justify-between items-center z-50">
          {[
            { id: "Beranda", label: "Beranda", icon: Home },
            { id: "Untukmu", label: "Untukmu", icon: PlayCircle },
            { id: "List Saya", label: "List Saya", icon: Bookmark },
            { id: "Akun", label: "Akun", icon: User },
          ].map((item) => {
            const Icon = item.icon;
            const isActive = activeNav === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveNav(item.id)}
                className={`flex flex-col items-center gap-1 transition-colors ${
                  isActive ? "text-rose-500 font-medium" : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-[10px] tracking-tight">{item.label}</span>
              </button>
            );
          })}
        </footer>

      </div>
    </div>
  );
}