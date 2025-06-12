"use client";

import Giscus from "@giscus/react";

export default function Comments() {
  return (
    <div className="mt-12">
      <Giscus
        id="comments"
        repo="YOUR_GITHUB_USERNAME/YOUR_REPO_NAME"
        repoId="YOUR_REPO_ID"
        category="Announcements"
        categoryId="YOUR_CATEGORY_ID"
        mapping="pathname"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="preferred_color_scheme"
        lang="en"
        loading="lazy"
      />
    </div>
  );
}
