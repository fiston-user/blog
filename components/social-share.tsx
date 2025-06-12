"use client";

import {
  TwitterShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TwitterIcon,
  LinkedinIcon,
  RedditIcon,
} from "react-share";

export default function SocialShare({
  url,
  title,
}: {
  url: string;
  title: string;
}) {
  const iconSize = 32;

  return (
    <div className="flex items-center gap-4 mt-8">
      <span className="text-lg font-semibold">Share this post:</span>
      <TwitterShareButton url={url} title={title}>
        <TwitterIcon size={iconSize} round />
      </TwitterShareButton>
      <LinkedinShareButton url={url}>
        <LinkedinIcon size={iconSize} round />
      </LinkedinShareButton>
      <RedditShareButton url={url} title={title}>
        <RedditIcon size={iconSize} round />
      </RedditShareButton>
    </div>
  );
}
