import { BookmarkProps } from "../../types";
import { useStore } from "../../appContext";
import React from "react";

export default function useBookmark({
  name,
  url,
  index,
  color,
}: BookmarkProps) {
  const { setEditor, setEditingBookmark } = useStore();
  const short = name[0].toLocaleUpperCase();

  return { name, short, url, openBookmarkEditorUi, openUrl, color };

  function openBookmarkEditorUi(e: React.MouseEvent<HTMLDivElement>) {
    e.stopPropagation();
    setEditor?.(true);
    setEditingBookmark({
      name,
      url,
      index,
      color,
    });
  }
  function openUrl() {
    window.open(url, "_blank").focus();
  }
}
