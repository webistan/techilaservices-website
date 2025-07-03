"use client"
import React, { useState } from "react";
import Image from "next/image";
import VideoModal from "../ui/VideoModal";

interface ProfileCardProps {
  imageSrc?: string;
  alt?: string;
  videoSrc?: string;
  title?: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ imageSrc = "/placeholder.svg?height=160&width=128", alt = "Professional portrait", videoSrc = "/sample-video.mp4", title = "Professional Introduction" }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>

      <Image
        src={imageSrc}
        alt={alt}
        width={128}
        height={160}
        className="w-full h-full object-cover rounded-3xl"
        onClick={() => setIsModalOpen(true)}
      />
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
          <div className="w-0 h-0 border-l-2 border-r-2 border-b-3 border-transparent border-b-slate-900"></div>
        </div>
      </div>
      <VideoModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        videoSrc={videoSrc}
        title={title}
      />
    </>
  );
};

export default ProfileCard; 