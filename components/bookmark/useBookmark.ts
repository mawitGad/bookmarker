import { BookmarkProps } from "../../types";
import { useStore } from "../../appContext.tsx";

export default function useBookmark({
  name,
  url,
  index,
  color,
}: BookmarkProps) {
  const { setEditor, setEditingBookmark } = useStore();
  const short = name[0].toLocaleUpperCase();
  
  return { name, short, url, openBookmarkEditorUi, openUrl, color };

  function openBookmarkEditorUi(e) {
    e.stopPropagation();
    setEditor(true);
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
