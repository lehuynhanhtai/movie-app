import { Button } from "@/components/ui/button";
import { ChevronRight, Star } from "lucide-react";
import Image from "next/image";
import React from "react";

const movieCategories = [
  {
    title: "Hot Movies",
    movies: [
      {
        id: 1,
        title: "Inception",
        rating: 4.9,
        image:
          "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&q=80&w=1470",
        description:
          "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
      },
      {
        id: 2,
        title: "Inception",
        rating: 4.9,
        image:
          "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&q=80&w=1470",
        description:
          "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
      },
      {
        id: 3,
        title: "Inception",
        rating: 4.9,
        image:
          "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&q=80&w=1470",
        description:
          "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
      },
      {
        id: 4,
        title: "Inception",
        rating: 4.9,
        image:
          "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&q=80&w=1470",
        description:
          "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
      },
      {
        id: 5,
        title: "Inception",
        rating: 4.9,
        image:
          "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&q=80&w=1470",
        description:
          "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
      },
      {
        id: 6,
        title: "Inception",
        rating: 4.9,
        image:
          "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&q=80&w=1470",
        description:
          "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
      },
    ],
  },
];

function HotMovie() {
  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        {movieCategories.map((category, index) => (
          <div key={index} className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold">{category.title}</h3>
              <Button
                variant="link"
                className="text-yellow-500 hover:text-yellow-600"
              >
                View All <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
              {category.movies.map((movie) => (
                <div
                  key={movie.id}
                  className="group relative rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
                >
                  <Image
                    src={movie.image}
                    alt={movie.title}
                    className="w-full h-[300px] object-cover"
                    width={400}
                    height={400}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 p-4">
                      <h4 className="text-lg font-bold mb-2">{movie.title}</h4>
                      <div className="flex items-center mb-2">
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <span className="ml-1 text-sm">{movie.rating}</span>
                      </div>
                      <p className="text-sm mb-4 line-clamp-2">
                        {movie.description}
                      </p>
                      <Button
                        size="sm"
                        className="bg-yellow-500 text-black hover:bg-yellow-600"
                      >
                        Xem Thêm
                      </Button>
                    </div>
                  </div>
                  <h4 className="text-lg font-bold mb-2">{movie.title}</h4>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HotMovie;
