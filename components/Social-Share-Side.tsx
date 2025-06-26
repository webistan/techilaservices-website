import { Eye, Instagram, Linkedin, Share2, Twitter } from "lucide-react";

export default function SocialShareSideSection() {
  return (
    <aside className="lg:w-20 flex lg:flex-col items-center lg:items-start space-x-4 lg:space-x-0 lg:space-y-6 py-4 lg:sticky lg:top-24 self-start">
    <div className="text-center">
      <Eye className="w-6 h-6 mx-auto text-neutral-500 mb-1" />
      <span className="text-xs text-neutral-500">Views</span>
    </div>
    <div className="text-center">
      <Share2 className="w-6 h-6 mx-auto text-neutral-500 mb-1" />
      <span className="text-xs text-neutral-500">Shares</span>
    </div>
    <a href="#" aria-label="Share on Twitter" className="text-neutral-500 hover:text-neutral-700">
      <Twitter className="w-6 h-6 mx-auto" />
    </a>
    <a href="#" aria-label="Share on Instagram" className="text-neutral-500 hover:text-neutral-700">
      <Instagram className="w-6 h-6 mx-auto" />
    </a>
    <a href="#" aria-label="Share on LinkedIn" className="text-neutral-500 hover:text-neutral-700">
      <Linkedin className="w-6 h-6 mx-auto" />
    </a>
  </aside>
  )
}