"use client";

import { Search, Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IMenuItem, IMenuResponse } from "@/app/interfaces";
import useDialog from "@/hooks/useDialog";
import PopUpSeach from "../PopupSearch";

export function Header({
  categories,
  countries,
}: {
  categories: IMenuResponse;
  countries: IMenuResponse;
}) {
  const menuItems = [
    {
      id: 1,
      name: "Phim lẻ",
      href: "/danh-sach/phim-le",
    },
    {
      id: 2,
      name: "Phim bộ",
      href: "/danh-sach/phim-bo",
    },
    {
      id: 3,
      name: "TV Show",
      href: "/danh-sach/tv-shows",
    },
    {
      id: 4,
      name: "Hoạt Hình",
      href: "/danh-sach/hoat-hinh",
    },
    {
      id: 5,
      name: "Thể loại",
      type: "the-loai",
      childItems: categories.data.items,
    },
    {
      id: 6,
      name: "Quốc gia",
      type: "quoc-gia",
      childItems: countries?.data?.items,
    },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openMenuIds, setOpenMenuIds] = useState<number[]>([]);
  const { open, handleToggleDialog } = useDialog();

  const toggleMobileSubmenu = (menuId: number) => {
    setOpenMenuIds((prev) =>
      prev.includes(menuId)
        ? prev.filter((id) => id !== menuId)
        : [...prev, menuId],
    );
  };

  const isMobileSubmenuOpen = (menuId: number) => {
    return openMenuIds.includes(menuId);
  };

  const getItemHref = (menuType: string, slug: string) => {
    return `/${menuType}/${slug}`;
  };

  return (
    <header className="sticky top-0 w-full bg-black/95 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link href="/">
              <h1 className="text-2xl font-bold text-yellow-500">Chill.Phim</h1>
            </Link>
            <nav className="hidden lg:flex items-center space-x-6">
              {menuItems.map((item) => {
                if (item.childItems) {
                  return (
                    <DropdownMenu key={item.id}>
                      <DropdownMenuTrigger className="flex items-center space-x-1 hover:text-yellow-500 transition-colors">
                        <span>{item.name}</span>
                        <ChevronDown className="h-4 w-4" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent
                        align="start"
                        className="max-w-[480px] bg-gray-900 border-gray-700 p-4"
                      >
                        <div className="grid grid-cols-3 gap-2">
                          {item.childItems?.map((child: IMenuItem) => (
                            <DropdownMenuItem
                              key={child._id}
                              className="hover:text-yellow-500"
                            >
                              <Link
                                href={getItemHref(item.type!, child.slug)}
                                className="w-full"
                              >
                                {child.name}
                              </Link>
                            </DropdownMenuItem>
                          ))}
                        </div>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  );
                }
                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    className="hover:text-yellow-500 transition-colors"
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div>
            <Button variant="ghost" size="icon" onClick={handleToggleDialog}>
              <Search className="text-gray-400" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="lg:hidden py-5 bg-black/95 max-h-[calc(100vh-4rem)] overflow-y-auto">
            <nav className="flex flex-col space-y-4 container mx-auto">
              {menuItems.map((item) => {
                if (item.childItems) {
                  return (
                    <div key={item.id}>
                      <button
                        onClick={() => toggleMobileSubmenu(item.id)}
                        className="flex items-center justify-between w-full hover:text-yellow-500 transition-colors"
                      >
                        <span>{item.name}</span>
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${
                            isMobileSubmenuOpen(item.id) ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {isMobileSubmenuOpen(item.id) && (
                        <div className="pl-4 mt-2 grid grid-cols-2 gap-2">
                          {item.childItems?.map((child) => (
                            <Link
                              key={child._id}
                              href={getItemHref(item.type!, child.slug)}
                              className="block hover:text-yellow-500 transition-colors"
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }
                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    className="hover:text-yellow-500 transition-colors"
                  >
                    {item.name}
                  </Link>
                );
              })}
              <div className="relative">
                <Input
                  type="search"
                  placeholder="Search movies..."
                  className="w-full bg-gray-900 border-gray-700"
                />
                <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </nav>
          </div>
        )}
      </div>
      <PopUpSeach open={open} handleToggleDialog={handleToggleDialog} />
    </header>
  );
}
