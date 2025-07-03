import React from "react";

interface VideoPlayerProps {
  videoSrc: string;
  title?: string;
}

export const isYouTubeUrl = (url: string) => {
  return /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\//.test(url);
};

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoSrc, title }) => {
  return (
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
  );
};

export default VideoPlayer; 