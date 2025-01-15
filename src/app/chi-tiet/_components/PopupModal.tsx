"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";

const PopUpModal = ({
  open,
  handleToggle,
  data,
}: {
  open: boolean;
  handleToggle: () => void;
  data: any;
}) => {
  // Hàm chuyển đổi URL YouTube
  const getYoutubeEmbedUrl = (url: string) => {
    const videoId = url.split("v=")[1]?.split("&")[0];
    return videoId ? `https://www.youtube.com/embed/${videoId}` : "";
  };

  const embedUrl = getYoutubeEmbedUrl(data.trailer_url);

  return (
    <Dialog open={open} onOpenChange={handleToggle}>
      <DialogContent className="max-w-4xl w-[90vw]">
        <div className="relative pb-[80%] h-0 w-full">
          <iframe
            src={embedUrl}
            title={data.origin_name}
            className="absolute top-0 left-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">
            {data.origin_name} | OFFICIAL TRAILER
          </h2>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PopUpModal;
