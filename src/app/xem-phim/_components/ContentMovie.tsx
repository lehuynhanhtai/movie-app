"use client";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";

export default function ContentMovie({ content }: any) {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <Card className="bg-gray-900 border-gray-800">
      <CardContent className="p-4 flex flex-col gap-2 justify-around">
        <div className="flex items-center gap-2 mb-4">
          <h2 className="font-semibold text-pink-500">Nội Dung Phim</h2>
        </div>
        <span
          className={`${cn(`text-gray-400 ${isExpanded ? "" : "line-clamp-2"}`)}`}
          dangerouslySetInnerHTML={{
            __html: content,
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
  );
}
