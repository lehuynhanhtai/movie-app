"use client";

import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import useCarousel from "@/hooks/useCarousel";

export function Banner() {
  const { setApi } = useCarousel({ autoSlide: true });

  return (
    <section className="relative">
      <Carousel setApi={setApi}>
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="relative h-[70vh] overflow-hidden">
                <div className="absolute inset-0">
                  <Image
                    src={`https://images.unsplash.com/photo-1534809027769-b00d750a6bac?auto=format&fit=crop&q=80&w=1287`}
                    alt={`Movie banner`}
                    width={1280}
                    height="900"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                </div>
                <div className="relative container mx-auto px-4 h-full flex items-center">
                  <div className="max-w-2xl">
                    <h2 className="text-5xl font-bold mb-4">Tieu de</h2>
                    <p className="text-lg mb-6">Mo ta</p>
                    <div className="flex items-center space-x-4 mb-8">
                      <div className="flex items-center">
                        <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                        <span className="ml-1">rating</span>
                      </div>
                    </div>
                    <Button className="bg-yellow-500 text-black hover:bg-yellow-600">
                      Watch Now
                    </Button>
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
