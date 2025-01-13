"use client";

import { useState, useEffect } from "react";
import { Loader2 } from "lucide-react"; // Import icon loading từ lucide-react
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "./ui/dialog";
import { Input } from "./ui/input";
import Image from "next/image";
import Link from "next/link";

// Định nghĩa kiểu dữ liệu cho movie
interface Movie {
  _id: string;
  name: string;
  origin_name: string;
  thumb_url: string;
  year: number;
  episode_current: string;
  slug: string;
}

const PopUpSeach = ({
  open,
  handleToggleDialog,
}: {
  open: boolean;
  handleToggleDialog: () => void;
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Hàm debounce để tránh gọi API quá nhiều lần
  useEffect(() => {
    const delayDebounce = setTimeout(async () => {
      if (searchTerm) {
        setIsLoading(true);
        try {
          const response = await fetch(
            `https://ophim1.com/v1/api/tim-kiem?keyword=${encodeURIComponent(
              searchTerm,
            )}`,
          );
          const data = await response.json();
          setMovies(data.data.items || []);
        } catch (error) {
          console.error("Error fetching movies:", error);
        } finally {
          setIsLoading(false);
        }
      } else {
        setMovies([]);
      }
    }, 500); // Delay 500ms

    return () => clearTimeout(delayDebounce);
  }, [searchTerm]);

  return (
    <Dialog open={open} onOpenChange={handleToggleDialog}>
      <DialogContent className="max-w-screen-md h-[80vh]">
        <div className="m-4">
          <DialogHeader>
            <div className="relative">
              <Input
                placeholder="Tìm kiếm"
                className="border border-gray-600"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {isLoading && (
                <Loader2 className="animate-spin h-4 w-4 absolute right-3 top-3" />
              )}
            </div>
          </DialogHeader>
          <div className="overflow-y-auto max-h-[calc(80vh-100px)]">
            {movies.map((movie) => (
              <DialogDescription
                key={movie._id}
                className="flex gap-4 rounded-lg hover:bg-gray-800 transition-colors my-5"
              >
                <Image
                  src={`${process.env.NEXT_PUBLIC_IMG_URL + movie.thumb_url}`}
                  alt={movie.name}
                  width={500}
                  height={300}
                  className="rounded-lg object-cover h-auto w-[150px]"
                />
                <Link
                  href={`/chi-tiet/${movie.slug}`}
                  className="space-y-2 h-[150px]"
                >
                  <h2 className="text-lg font-medium text-blue-400">
                    {movie.name}
                  </h2>
                  <div>Trạng thái: {movie.episode_current}</div>
                  <p className="text-gray-500">{movie.year}</p>
                </Link>
              </DialogDescription>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PopUpSeach;
