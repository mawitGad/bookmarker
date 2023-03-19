import { useState, useRef, useEffect } from "react";
import { useStore } from "../../appContext";

export default function useBookmarkEditor() {
  const { setEditor, editingBookmark, bookmarkStore } = useStore();
  const [name, setName] = useState<string>(editingBookmark.name);
  const [url, setUrl] = useState<string>(editingBookmark.url);

  useEffect(close_on_click_outside, []);

  return { setName, setUrl, editBookmark, name, url, deleteBookmark };

  function editBookmark(e) {
    e.preventDefault();
    bookmarkStore.editBookmark(
      { name, url, color: editingBookmark.color },
      editingBookmark.index
    );
    setEditor?.(false);
  }
  function deleteBookmark(e) {
    e.preventDefault();
    bookmarkStore.deleteBookmark(editingBookmark.index);
    setEditor?.(false);
  }

  function close_on_click_outside() {
    const callback = (e) => {
      const ui = document.getElementById("bookmark-editor-ui");
      if (!ui) return;
      if (!ui.contains(e.target)) setEditor?.(false);
    };
    window.addEventListener("click", callback);

    return () => window.removeEventListener("click", callback);
  }
}
