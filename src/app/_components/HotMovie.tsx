import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ChevronRight, Star, TimerIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function HotMovie({ upcomingMovies }: any) {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold capitalize">Phim sắp chiếu</h3>
            <Button
              variant="link"
              className="text-yellow-500 hover:text-yellow-600"
            >
              Xem thêm <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full select-none"
          >
            <CarouselContent>
              {upcomingMovies?.items?.map((movie: any) => (
                <CarouselItem
                  key={movie._id}
                  className="relative basis-1/2 md:basis-1/3 lg:basis-1/5 xl:basis-1/6"
                >
                  <div className="absolute top-2 z-10 flex flex-col gap-1">
                    <Badge
                      variant="destructive"
                      className=""
                    >{`${movie.quality}+${movie.lang}`}</Badge>
                    <Badge
                      variant="destructive"
                      className="text-center w-fit"
                    >{`${movie.episode_current}`}</Badge>
                  </div>
                  <div className="group relative rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_URL + movie.poster_url}`}
                      alt={movie.slug}
                      className="w-auto h-[300px] object-cover"
                      width={400}
                      height={400}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 p-4">
                        <h4 className="text-sm font-bold">
                          {movie.origin_name}
                        </h4>
                        <div className="flex items-center mb-2 gap-1">
                          <TimerIcon className="h-4 w-4" />
                          <span>{movie.time}</span>
                        </div>
                        <div className="flex items-center mb-2">
                          <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                          <span className="ml-1 text-sm">
                            {movie.tmdb.vote_average}
                          </span>
                        </div>
                        <Link href={`/chi-tiet/${movie.slug}`}>
                          <Button
                            size="sm"
                            className="bg-yellow-500 text-black hover:bg-yellow-600"
                          >
                            Xem Thêm
                          </Button>
                        </Link>
                      </div>
                    </div>
                    <h4 className="text-sm font-bold mt-2 line-clamp-1 text-center">
                      EN: {movie.origin_name}
                    </h4>
                    <h4 className="text-sm font-bold mt-2 line-clamp-1 text-center">
                      {movie.name}
                    </h4>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 text-yellow-500" />
            <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 text-yellow-500" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export default HotMovie;
