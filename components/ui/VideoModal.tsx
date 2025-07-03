import React from "react";
import { Dialog, DialogContent } from "./dialog";
import { DialogTitle } from "@radix-ui/react-dialog";

interface VideoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  videoSrc: string;
  title?: string;
}

const isYouTubeUrl = (url: string) => {
  return /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\//.test(url);
};

const VideoModal: React.FC<VideoModalProps> = ({ open, onOpenChange, videoSrc, title }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTitle className="sr-only">{title || "Video"}</DialogTitle>
      <DialogContent className="p-0 max-w-2xl w-full">
        {/* {title && <div className="px-6 pt-6 text-lg font-semibold">{title}</div>} */}
        <div className="aspect-w-16 aspect-h-9 w-full">
          {isYouTubeUrl(videoSrc) ? (
            <iframe
              src={
                videoSrc.includes("embed")
                  ? videoSrc
                  : videoSrc.replace(
                      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]+)/,
                      "https://www.youtube.com/embed/$1"
                    )
              }
              title={title || "YouTube video"}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-[420px] rounded-xl"
            />
          ) : (
            <video controls autoPlay className="w-full h-full rounded-xl">
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoModal; 