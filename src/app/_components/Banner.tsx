"use client";

import * as React from "react";
import Image from "next/image";
import { Star } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import useCarousel from "@/hooks/useCarousel";
import Link from "next/link";

export function Banner({ hotMovie }: any) {
  const { setApi } = useCarousel({ autoSlide: true });

  return (
    <section className="relative">
      <Carousel setApi={setApi}>
        <CarouselContent>
          {hotMovie.items.map((movie: any) => (
            <CarouselItem key={movie._id}>
              <div className="relative h-[50vh] md:h-[70vh] overflow-hidden">
                <div className="absolute inset-0">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_IMG_URL + movie.poster_url}`}
                    alt={movie.slug}
                    width={1920}
                    height="900"
                    className="w-full h-full object-cover inset-0 bg-center"
                    decoding="async"
                    data-nimg="1"
                    priority
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                </div>
                <div className="relative container mx-auto px-4 h-full flex items-center">
                  <div className="max-w-2xl">
                    <h2 className="text-5xl font-bold mb-4">
                      {movie.origin_name}
                    </h2>
                    <p className="text-lg mb-6">{movie.name}</p>
                    <div className="flex items-center space-x-4 mb-8">
                      <div className="flex items-center">
                        <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                        <span className="ml-1">{movie.tmdb.vote_average}</span>
                      </div>
                    </div>
                    <Link href={`/chi-tiet/${movie.slug}`}>
                      <Button className="bg-yellow-500 text-black hover:bg-yellow-600">
                        Xem ngay
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
