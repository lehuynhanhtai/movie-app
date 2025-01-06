"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function MovieDetails({ fetDetailMovie }: any) {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const servers = fetDetailMovie.data.item.episodes;

  return (
    <div className={`max-w-6xl mx-auto space-y-10`}>
      <div className="grid md:grid-cols-[300px,1fr] gap-6">
        {/* Poster */}
        <div className="relative">
          <Card className="w-full h-[450px] bg-gray-800 overflow-hidden">
            <Image
              src={
                process.env.NEXT_PUBLIC_IMG_URL +
                fetDetailMovie.data.item.thumb_url
              }
              alt={fetDetailMovie.data.item.slug}
              width={300}
              height={450}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 space-y-2">
              <Button className="w-full bg-yellow-600 hover:bg-yellow-700">
                Xem phim
              </Button>
            </div>
          </Card>
        </div>

        {/* Details */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">
              {fetDetailMovie.data.item.name}
            </h1>
            <p className="text-gray-400">
              {fetDetailMovie.data.item.origin_name}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-gray-400">
                Năm:{" "}
                <span className="text-gray-200">
                  {fetDetailMovie.data.item.year}
                </span>
              </p>
              <p className="text-gray-400">
                Đang phát:{" "}
                <span className="text-gray-200">
                  {fetDetailMovie.data.item.episode_current}
                </span>
              </p>
              <p className="text-gray-400">
                Quốc gia:{" "}
                {fetDetailMovie.data.item.country.map((country: any) => (
                  <span key={country.id} className="text-gray-200">
                    {country.name}
                  </span>
                ))}
              </p>
              <p className="text-gray-400">
                Thể loại:{" "}
                {fetDetailMovie.data.item.category.map((category: any) => (
                  <span key={category.id} className="text-gray-200">
                    {category.name}
                  </span>
                ))}
              </p>
            </div>
            <div>
              <p className="text-gray-400">
                Thời lượng:{" "}
                <span className="text-gray-200">
                  {fetDetailMovie.data.item.time}
                </span>
              </p>
              <p className="text-gray-400">
                Tổng tập phim:{" "}
                <span className="text-gray-200">
                  {fetDetailMovie.data.item.episode_total}
                </span>
              </p>
              <p className="text-gray-400">
                Chất lượng:{" "}
                <span className="text-gray-200">
                  {fetDetailMovie.data.item.quality}+
                  {fetDetailMovie.data.item.lang}
                </span>
              </p>
              <div className="flex items-center gap-1">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span className="text-xl font-bold">
                  {fetDetailMovie.data.item.tmdb.vote_average}
                </span>
                <span className="text-gray-400">
                  ({fetDetailMovie.data.item.view} lượt xem)
                </span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Diễn viên</h2>
            <p className="text-gray-400">
              {fetDetailMovie.data.item.actor?.map(
                (actor: any, index: number) => (
                  <span
                    key={index}
                    className="inline-block bg-gray-700 text-gray-200 rounded-full px-3 py-1 text-sm mr-2 mb-2"
                  >
                    {actor ? actor : "Chưa rõ"}
                  </span>
                ),
              )}
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2">Đạo diễn</h2>
            <p className="text-gray-400">
              {fetDetailMovie.data.item.director?.map(
                (director: any, index: number) => (
                  <span
                    key={index}
                    className="inline-block bg-gray-700 text-gray-200 rounded-full px-3 py-1 text-sm mr-2 mb-2"
                  >
                    {director ? director : "Chưa rõ"}
                  </span>
                ),
              )}
            </p>
          </div>
        </div>
      </div>
      {/* Content Description */}
      <Card className="bg-gray-900 border-gray-800">
        <CardContent className="p-4 flex flex-col gap-2 justify-around">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="font-semibold text-pink-500">Nội Dung Phim</h2>
          </div>
          <span
            className={`${cn(`text-gray-400 ${isExpanded ? "" : "line-clamp-2"}`)}`}
            dangerouslySetInnerHTML={{
              __html: fetDetailMovie.data.item.content,
            }}
          />
          <Button
            variant="ghost"
            className="text-pink-500 h-auto hover:text-pink-400 w-fit p-0"
            onClick={toggleExpand}
          >
            {isExpanded ? "Thu gọn" : "Mở rộng"}
          </Button>
        </CardContent>
      </Card>
      {/* Episode Navigation */}
      <Tabs defaultValue="server-0" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-4">
          {servers.map((server: any, index: number) => (
            <TabsTrigger
              key={`server-${index}`}
              value={`server-${index}`}
              className="data-[state=active]:bg-yellow-500 data-[state=active]:text-black"
            >
              {server.server_name}
            </TabsTrigger>
          ))}
        </TabsList>

        {servers.map((server: any, serverIndex: number) => (
          <TabsContent
            key={`server-${serverIndex}`}
            value={`server-${serverIndex}`}
          >
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-1 h-4 bg-yellow-500"></div>
                  <h2 className="font-semibold text-yellow-500">
                    {server.server_name}
                  </h2>
                </div>
                <div className="grid grid-cols-6 md:grid-cols-10 gap-2">
                  {server.server_data?.map((episode: any, index: number) => (
                    <Button disabled={episode.name === ""} key={episode.name}>
                      {episode.name}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
