"use client";
import Video from "next-video";
import { useServer } from "../contexts/ServerContext";

export default function PlayerMovie({ movie, slug }: any) {
  const { currentServer } = useServer();

  // Tìm server hiện tại dựa trên tên
  const currentServerData = movie.item.episodes.find(
    (server: any) => server.server_name === currentServer,
  );

  // Tìm episode phù hợp từ server hiện tại
  const currentEpisode = currentServerData?.server_data.find(
    (episode: any) => episode.name === slug.replace("tap-", ""),
  );

  return (
    <section>
      <div className="mt-5 mb-5">
        <h1 className="font-bold text-xl text-yellow-500 line-clamp-1">
          {movie.item.origin_name}/ {movie.item.name}
        </h1>
        {currentServerData && (
          <div className="text-sm text-gray-400">
            Đang phát: {currentServerData.server_name} - Tập{" "}
            {slug.replace("tap-", "")}
          </div>
        )}
      </div>
      {currentEpisode && (
        <Video
          src={currentEpisode.link_m3u8}
          poster={process.env.NEXT_PUBLIC_IMG_URL + movie.item.poster_url}
          className="w-full aspect-video overflow-hidden bg-center bg-no-repeat"
        />
      )}
    </section>
  );
}
