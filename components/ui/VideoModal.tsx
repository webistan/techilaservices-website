import React from "react";
import { Dialog, DialogContent } from "./dialog";
import { DialogTitle } from "@radix-ui/react-dialog";
import VideoPlayer from "./VideoPlayer";

interface VideoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  videoSrc: string;
  title?: string;
}

const VideoModal: React.FC<VideoModalProps> = ({ open, onOpenChange, videoSrc, title }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTitle className="sr-only">{title || "Video"}</DialogTitle>
      <DialogContent className="p-0 max-w-2xl w-full">
        {/* {title && <div className="px-6 pt-6 text-lg font-semibold">{title}</div>} */}
        <VideoPlayer videoSrc={videoSrc} title={title} />
      </DialogContent>
    </Dialog>
  );
};

export default VideoModal; 