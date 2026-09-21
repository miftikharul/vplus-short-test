"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { Search, Gem, Gift, Home, PlayCircle, Bookmark, User } from "lucide-react";
import { MENU_DATA, CLUSTER_DATA } from "@/data/mockData";

const menuTranslations: Record<string, string> = {
  Discover: "Jelajah", Exclusive: "Eksklusif", New: "Baru", Ranking: "Peringkat", Categories: "Kategori",
};

// reusable kartu film
const PosterCard = ({ item, badge, isGrid2 = false }: { item: any; badge?: string; isGrid2?: boolean }) => (
  <div className="flex flex-col gap-1.5 cursor-pointer group">
    <div className="relative aspect-[3/4] w-full rounded-md overflow-hidden bg-zinc-900">
      {item.image && (
        <Image
          src={item.image}
          alt={item.title || "Poster"}
          fill
          sizes={isGrid2 ? "(max-width: 480px) 50vw, 220px" : "(max-width: 480px) 33vw, 150px"}
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      )}
      {badge && (
        <span className="absolute top-1 right-1 bg-rose-600/90 text-[9px] font-bold px-1.5 py-0.5 rounded text-white backdrop-blur-sm">
          {badge}
        </span>
      )}
    </div>
    <h3 className="text-xs font-semibold text-zinc-100 line-clamp-1 leading-snug">{item.title}</h3>
    {(item.description || item.subtitle || item.genre) && (
      <p className="text-[10px] text-zinc-400 line-clamp-1">{item.description || item.subtitle || item.genre}</p>
    )}
  </div>
);

export default function VPlusShortApp() {
  const menus = MENU_DATA.data.menus;
  const [selectedMenuId, setSelectedMenuId] = useState<number>(menus[0]?.id || 1);
  const [selectedSubMenuId, setSelectedSubMenuId] = useState<number | null>(null);
  const [activeBottomNav, setActiveBottomNav] = useState<string>("Beranda");

  const currentMenu = useMemo(() => menus.find((m) => m.id === selectedMenuId), [menus, selectedMenuId]);

  const handleMenuClick = (menu: typeof menus[0]) => {
    setSelectedMenuId(menu.id);
    setSelectedSubMenuId(menu.sub_menus?.[0]?.id || null);
  };

  // data utama
  const activeClusters = useMemo(() => {
    const rawClusters = CLUSTER_DATA.data;
    const title = currentMenu?.title || "";

    if (title === "New" || title === "Baru") {
      const activeSub = currentMenu?.sub_menus?.find((s) => s.id === selectedSubMenuId);
      const isComingSoon = activeSub?.title === "Coming Soon" || activeSub?.page_id === 8;

      if (isComingSoon) {
        return rawClusters
          .map((c: any) => {
            if (c.properties?.type === "horizontal_strip") return c;
            const items = c.items?.filter((i: any) => i.page_id === 8);
            return items?.length ? { ...c, title: "Coming Soon", items } : null;
          })
          .filter(Boolean);
      }
      return rawClusters
        .map((c: any) => (c.properties?.type === "horizontal_strip" ? null : { ...c, items: c.items?.filter((i: any) => i.page_id !== 8) }))
        .filter(Boolean);
    }

    if (title === "Ranking" || title === "Peringkat") {
      const activeSub = currentMenu?.sub_menus?.find((s) => s.id === selectedSubMenuId);
      return activeSub?.title === "Most Liked" ? rawClusters.map((c: any) => ({ ...c, items: [...c.items].reverse() })) : rawClusters;
    }

    if (title === "Categories" || title === "Kategori") {
      return rawClusters.map((c: any) => c.properties.type === "grid_3" ? { ...c, title: "Kategori Populer", items: c.items.slice(0, 4) } : c);
    }

    if (title === "Exclusive" || title === "Eksklusif") {
      return rawClusters.map((c: any) => ({ ...c, items: c.items.filter((_: any, i: number) => i % 2 === 0) }));
    }

    return rawClusters;
  }, [currentMenu, selectedSubMenuId]);

  return (
    <div className="bg-black min-h-screen flex justify-center text-white font-sans">
      <div className="w-full max-w-[480px] bg-black min-h-screen flex flex-col pb-20 relative border-x border-zinc-900 shadow-2xl">
        <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-md border-b border-zinc-900">
          <div className="px-4 pt-3 pb-2 flex items-center justify-between">
            <div className="flex items-center gap-1 font-bold text-2xl tracking-wide">
              <span>V</span><span className="text-rose-500">+Short</span>
            </div>
            <div className="flex items-center gap-4 text-zinc-300">
              <Search className="w-5 h-5" /><Gem className="w-5 h-5" /><Gift className="w-5 h-5" />
            </div>
          </div>

          {/*  top navigasi */}
          <nav className="flex items-center gap-6 overflow-x-auto no-scrollbar px-4 py-2">
            {menus.map((menu) => (
              <button
                key={menu.id}
                onClick={() => handleMenuClick(menu)}
                className={`whitespace-nowrap relative pb-1.5 text-sm font-medium ${selectedMenuId === menu.id ? "text-white font-bold text-base" : "text-zinc-400"}`}
              >
                {menuTranslations[menu.title] || menu.title}
                {selectedMenuId === menu.id && <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-rose-500 rounded-full" />}
              </button>
            ))}
          </nav>

          {/* sub Navigation */}
          {currentMenu?.sub_menus && (
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar px-4 py-2 bg-zinc-950/90 border-t border-zinc-900">
              {currentMenu.sub_menus.map((sub) => (
                <button
                  key={sub.id}
                  onClick={() => setSelectedSubMenuId(sub.id)}
                  className={`px-3.5 py-1 text-xs rounded-full whitespace-nowrap ${selectedSubMenuId === sub.id ? "bg-rose-600 text-white font-semibold" : "bg-zinc-900 text-zinc-400"}`}
                >
                  {sub.title}
                </button>
              ))}
            </div>
          )}
        </header>

        {/* konten */}
        <main className="px-3 pt-4 space-y-6 flex-1">
          {activeBottomNav === "Beranda" ? (
            activeClusters.map((cluster: any, idx: number) => (
              <section key={idx} className="space-y-3">
                {!cluster.properties?.hide_title && <h2 className="text-base font-bold text-white">{cluster.title}</h2>}

                {cluster.properties?.type === "grid_3" && (
                  <div className="grid grid-cols-3 gap-2.5">
                    {cluster.items?.map((item: any, i: number) => <PosterCard key={i} item={item} badge="Dubbing" />)}
                  </div>
                )}

                {cluster.properties?.type === "horizontal_strip" && (
                  <div className="grid grid-cols-2 gap-3">
                    {cluster.items?.map((item: any, i: number) => <PosterCard key={i} item={item} isGrid2 />)}
                  </div>
                )}

                {cluster.properties?.type === "grid_2" && (
                  <div className="space-y-4">
                    {cluster.items?.map((sub: any, subIdx: number) => (
                      <div key={subIdx} className="space-y-2">
                        {sub.segmentation_name && <h3 className="text-xs font-bold text-rose-500 uppercase">{sub.segmentation_name}</h3>}
                        <div className="grid grid-cols-2 gap-3">
                          {sub.segmentation_items?.map((item: any, i: number) => <PosterCard key={i} item={item} isGrid2 />)}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </section>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center h-64 text-center">
              <h3 className="text-lg font-bold text-zinc-200">Halaman {activeBottomNav}</h3>
              <p className="text-xs text-zinc-500">Fitur ini siap dikembangkan lebih lanjut.</p>
            </div>
          )}
        </main>

        {/* navigasi bawah */}
        <footer className="fixed bottom-0 w-full max-w-[480px] bg-black/95 backdrop-blur-lg border-t border-zinc-900 px-6 py-2.5 flex justify-between items-center z-50">
          {[{ id: "Beranda", label: "Beranda", icon: Home }, { id: "Untukmu", label: "Untukmu", icon: PlayCircle }, { id: "List Saya", label: "List Saya", icon: Bookmark }, { id: "Akun", label: "Akun", icon: User }].map((item) => {
            const Icon = item.icon;
            return (
              <button key={item.id} onClick={() => setActiveBottomNav(item.id)} className={`flex flex-col items-center gap-1 ${activeBottomNav === item.id ? "text-rose-500" : "text-zinc-500"}`}>
                <Icon className="w-5 h-5" />
                <span className="text-[10px] font-medium">{item.label}</span>
              </button>
            );
          })}
        </footer>
      </div>
    </div>
  );
}