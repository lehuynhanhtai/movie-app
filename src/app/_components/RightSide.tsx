import { Button } from "@/components/ui/button";
import { fetchNewsMovies } from "@/fetch";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

async function RightSide({ className }: { className?: string }) {
  const data = await fetchNewsMovies({
    params: { page: 1, category: "", country: "", year: "" },
  });

  return (
    <section className={className}>
      <div className="">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-2xl font-bold">Top Xem Nhiều</h3>
            <Button
              variant="link"
              className="text-yellow-500 hover:text-yellow-600"
            >
              Xem thêm <ChevronRight className="ml-2 h-4 w-4" />
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
            {data?.items.map((movie: any) => (
              <Link
                key={movie._id}
                href={`/chi-tiet/${movie.slug}`}
                className="flex gap-4 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <Image
                  src={`${process.env.NEXT_PUBLIC_IMG_URL + movie.thumb_url}`}
                  alt={movie.slug}
                  width={100}
                  height="300"
                  className="rounded-lg object-cover h-auto w-auto"
                  priority={true}
                  placeholder="empty"
                />
                <div className="space-y-2">
                  <h2 className="text-lg font-medium text-blue-400">
                    {movie.origin_name}
                  </h2>
                  <div>
                    Thể loại:{" "}
                    {movie.category.map((category: any) => (
                      <span key={category.id} className="mr-2">
                        {category.name},
                      </span>
                    ))}
                  </div>
                  <div>
                    Quốc gia:{" "}
                    {movie.country.map((country: any) => (
                      <span key={country.id} className="mr-2">
                        {country.name},
                      </span>
                    ))}
                  </div>
                  <div>Trạng thái: {movie.episode_current}</div>
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
