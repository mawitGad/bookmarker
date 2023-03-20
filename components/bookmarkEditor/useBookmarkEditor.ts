import { useState, useRef, useEffect, MouseEventHandler } from "react";
import { useStore } from "../../appContext";

export default function useBookmarkEditor() {
  const { setEditor, editingBookmark, bookmarkStore } = useStore();
  const [name, setName] = useState<string>(editingBookmark.name);
  const [url, setUrl] = useState<string>(editingBookmark.url);

  useEffect(close_on_click_outside, []);

  const editBookmark : MouseEventHandler<HTMLButtonElement> = (e)=> {
    e.preventDefault();
    bookmarkStore?.editBookmark(
      { name, url, color: editingBookmark.color || "" },
      editingBookmark.index
    );
    setEditor?.(false);
  }

  const deleteBookmark : MouseEventHandler<HTMLButtonElement> = (e)=>{
    e.preventDefault();
    bookmarkStore?.deleteBookmark(editingBookmark.index);
    setEditor?.(false);
  }
  return { setName, setUrl, editBookmark, name, url, deleteBookmark };


  function close_on_click_outside() {
    const callback = (e : Event) => {
        const node = e.target as unknown as Node
      const ui = document.getElementById("bookmark-editor-ui");
      if (!ui) return;
      if (!ui.contains(node)) setEditor?.(false);
    };
    window?.addEventListener("click", callback);

    return () => window?.removeEventListener("click", callback);
  }
}
