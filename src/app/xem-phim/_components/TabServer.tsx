"use client";

import Link from "next/link";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useServer } from "../contexts/ServerContext";

export default function TabServer({ data, slug }: any) {
  const { currentServer, setCurrentServer } = useServer();
  const episodeMovie = slug.replace("tap-", "");

  return (
    <Tabs
      defaultValue={`${currentServer}`}
      className="w-full"
      onValueChange={(server) => setCurrentServer(server)}
    >
      <TabsList className="grid w-full grid-cols-3 mb-4">
        {data.episodes.map((server: any) => (
          <TabsTrigger
            key={`${server.server_name}`}
            value={`${server.server_name}`}
            className="data-[state=active]:bg-yellow-500 data-[state=active]:text-black"
          >
            {server.server_name}
          </TabsTrigger>
        ))}
      </TabsList>

      {data.episodes.map((server: any) => (
        <TabsContent
          key={`${server.server_name}`}
          value={`${server.server_name}`}
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
                {server.server_data?.map((episode: any) => (
                  <Button
                    disabled={episode.name === ""}
                    key={episode.name}
                    className={cn(
                      "hover:bg-yellow-500 hover:text-black",
                      episodeMovie === episode.slug || episode.name
                        ? "bg-yellow-500"
                        : "", // Kiểm tra episode.name tồn tại trong slug
                    )}
                  >
                    <Link
                      href={`/xem-phim/${data.slug}/tap-${episode.slug}`}
                      className="w-full"
                    >
                      {episode.name}
                    </Link>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      ))}
    </Tabs>
  );
}
