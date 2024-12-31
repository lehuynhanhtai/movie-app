import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Movie {
  id: string;
  title: string;
  originalTitle?: string;
  year: number;
  posterUrl: string;
}

const movies: Movie[] = [
  {
    id: "1",
    title: "Jaws",
    originalTitle: "Hàm cá mập",
    year: 1975,
    posterUrl:
      "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&q=80&w=1470",
  },
  {
    id: "2",
    title: "The Legend of Condor Heroes",
    originalTitle: "Anh Hùng Xạ Điêu (2003)",
    year: 2003,
    posterUrl:
      "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&q=80&w=1470",
  },
];

function RightSide({ className }: { className?: string }) {
  return (
    <section className={className}>
      <div className="">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-2xl font-bold">Top Movies</h3>
            <Button
              variant="link"
              className="text-yellow-500 hover:text-yellow-600"
            >
              View All <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          {/* <div className="flex items-center justify-between mb-6">
            <Tabs defaultValue="week" className="w-auto">
            <TabsList className="bg-gray-800">
              <TabsTrigger 
                value="week" 
                className="data-[state=active]:bg-teal-500"
              >
                Tuần
              </TabsTrigger>
              <TabsTrigger 
                value="month"
                className="data-[state=active]:bg-teal-500"
              >
                Tháng
              </TabsTrigger>
              <TabsTrigger 
                value="year"
                className="data-[state=active]:bg-teal-500"
              >
                Năm
              </TabsTrigger>
            </TabsList>
          </Tabs>
          </div> */}

          <div className="space-y-4">
            {movies.map((movie) => (
              <Link
                key={movie.id}
                href={`/movie/${movie.id}`}
                className="flex gap-4 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <Image
                  src={movie.posterUrl}
                  alt={movie.title}
                  width={150}
                  height={300}
                  className="rounded-lg object-cover h-[200px]"
                  priority
                />
                <div className="space-y-2">
                  <h2 className="text-lg font-medium text-blue-400">
                    {movie.title}
                  </h2>
                  {movie.originalTitle && (
                    <p className="text-gray-400">{movie.originalTitle}</p>
                  )}
                  <p className="text-gray-500">{movie.year}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default RightSide;
