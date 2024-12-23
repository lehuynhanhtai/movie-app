"use client";

import { Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import Link from "next/link";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 w-full bg-black/95 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <h1 className="text-2xl font-bold text-yellow-500">Chill.Phim</h1>

            <nav className="hidden md:flex items-center space-x-6">
              <Link
                href="#"
                className="hover:text-yellow-500 transition-colors"
              >
                Home
              </Link>
              <Link
                href="#"
                className="hover:text-yellow-500 transition-colors"
              >
                Genre
              </Link>
              <Link
                href="#"
                className="hover:text-yellow-500 transition-colors"
              >
                Top Movies
              </Link>
              <Link
                href="#"
                className="hover:text-yellow-500 transition-colors"
              >
                Showtimes
              </Link>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex relative">
              <Input
                type="search"
                placeholder="Search movies..."
                className="w-64 bg-gray-900 border-gray-700 focus:border-yellow-500"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            {/* <Button
              variant="outline"
              className="hidden md:flex border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black"
            >
              Login
            </Button>
            <Button className="hidden md:flex bg-yellow-500 text-black hover:bg-yellow-600">
              Register
            </Button> */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="hover:text-yellow-500 transition-colors">
                Home
              </a>
              <a href="#" className="hover:text-yellow-500 transition-colors">
                Genre
              </a>
              <a href="#" className="hover:text-yellow-500 transition-colors">
                Top Movies
              </a>
              <a href="#" className="hover:text-yellow-500 transition-colors">
                Showtimes
              </a>
              <div className="relative">
                <Input
                  type="search"
                  placeholder="Search movies..."
                  className="w-full bg-gray-900 border-gray-700"
                />
                <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              {/* <Button
                variant="outline"
                className="w-full border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black"
              >
                Login
              </Button>
              <Button className="w-full bg-yellow-500 text-black hover:bg-yellow-600">
                Register
              </Button> */}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
