import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { fetchHoatHinh, fetchPhimBo, fetchPhimLe, fetchTvShows } from "@/fetch";
import { ChevronRight, Star, TimerIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface LeftSideProps {
  className?: string;
}

function LeftSide({ className }: LeftSideProps) {
  return (
    <section className={`${className} space-y-16`}>
      <PhimLe />
      <PhimBo />
      <TvShows />
      <HoatHinh />
    </section>
  );
}

const PhimLe = async () => {
  const data = await fetchPhimLe({
    params: { page: 1, category: "", country: "", year: "" },
  });
  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-2xl font-bold">Phim Lẻ</h3>
        <Link href={`/danh-sach/${data.type_list}`}>
          <Button
            variant="link"
            className="text-yellow-500 hover:text-yellow-600"
          >
            Xem thêm <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
        {data.items.map((movie: any) => (
          <div
            key={movie._id}
            className="group relative rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            <div className="absolute top-2 z-10 flex flex-col gap-1">
              <Badge
                variant="destructive"
                className="text-center w-fit"
              >{`${movie.quality}+${movie.lang}`}</Badge>
              <Badge
                variant="destructive"
                className="text-center w-fit"
              >{`${movie.episode_current}`}</Badge>
            </div>
            <div className="group relative rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
              <Image
                src={`${process.env.NEXT_PUBLIC_IMG_URL + movie.thumb_url}`}
                alt={movie.slug}
                className="w-full h-[300px] object-cover"
                width={400}
                height={400}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 p-4">
                  <h4 className="text-sm font-bold">{movie.origin_name}</h4>
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
                EG: {movie.origin_name}
              </h4>
              <h4 className="text-sm font-bold mt-2 line-clamp-1 text-center">
                {movie.name}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const PhimBo = async () => {
  const data = await fetchPhimBo({
    params: { page: 1, category: "", country: "", year: "" },
  });
  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-2xl font-bold">Phim Bộ</h3>
        <Link href={`/danh-sach/${data.type_list}`}>
          <Button
            variant="link"
            className="text-yellow-500 hover:text-yellow-600"
          >
            Xem thêm <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
        {data.items.map((movie: any) => (
          <div
            key={movie._id}
            className="group relative rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            <div className="absolute top-2 z-10 flex flex-col gap-1">
              <Badge
                variant="destructive"
                className="text-center w-fit"
              >{`${movie.quality}+${movie.lang}`}</Badge>
              <Badge
                variant="destructive"
                className="text-center w-fit"
              >{`${movie.episode_current}`}</Badge>
            </div>
            <div className="group relative rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
              <Image
                src={`${process.env.NEXT_PUBLIC_IMG_URL + movie.thumb_url}`}
                alt={movie.slug}
                className="w-full h-[300px] object-cover"
                width={400}
                height={400}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 p-4">
                  <h4 className="text-sm font-bold">{movie.origin_name}</h4>
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
                EG: {movie.origin_name}
              </h4>
              <h4 className="text-sm font-bold mt-2 line-clamp-1 text-center">
                {movie.name}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const TvShows = async () => {
  const data = await fetchTvShows({
    params: { page: 1, category: "", country: "", year: "" },
  });
  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-2xl font-bold">Tv Shows</h3>
        <Link href={`/danh-sach/${data.type_list}`}>
          <Button
            variant="link"
            className="text-yellow-500 hover:text-yellow-600"
          >
            Xem thêm <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
        {data.items.map((movie: any) => (
          <div
            key={movie._id}
            className="group relative rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            <div className="absolute top-2 z-10 flex flex-col gap-1">
              <Badge
                variant="destructive"
                className="text-center w-fit"
              >{`${movie.quality}+${movie.lang}`}</Badge>
              <Badge
                variant="destructive"
                className="text-center w-fit"
              >{`${movie.episode_current}`}</Badge>
            </div>
            <div className="group relative rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
              <Image
                src={`${process.env.NEXT_PUBLIC_IMG_URL + movie.thumb_url}`}
                alt={movie.slug}
                className="w-full h-[300px] object-cover"
                width={400}
                height={400}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 p-4">
                  <h4 className="text-sm font-bold">{movie.origin_name}</h4>
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
                EG: {movie.origin_name}
              </h4>
              <h4 className="text-sm font-bold mt-2 line-clamp-1 text-center">
                {movie.name}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const HoatHinh = async () => {
  const data = await fetchHoatHinh({
    params: { page: 1, category: "", country: "", year: "" },
  });
  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-2xl font-bold">Hoạt Hình</h3>
        <Link href={`/danh-sach/${data.type_list}`}>
          <Button
            variant="link"
            className="text-yellow-500 hover:text-yellow-600"
          >
            Xem thêm <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
        {data.items.map((movie: any) => (
          <div
            key={movie._id}
            className="group relative rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            <div className="absolute top-2 z-10 flex flex-col gap-1">
              <Badge
                variant="destructive"
                className="text-center w-fit"
              >{`${movie.quality}+${movie.lang}`}</Badge>
              <Badge
                variant="destructive"
                className="text-center w-fit"
              >{`${movie.episode_current}`}</Badge>
            </div>
            <div className="group relative rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
              <Image
                src={`${process.env.NEXT_PUBLIC_IMG_URL + movie.thumb_url}`}
                alt={movie.slug}
                className="w-full h-[300px] object-cover"
                width={400}
                height={400}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 p-4">
                  <h4 className="text-sm font-bold">{movie.origin_name}</h4>
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
                EG: {movie.origin_name}
              </h4>
              <h4 className="text-sm font-bold mt-2 line-clamp-1 text-center">
                {movie.name}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftSide;
