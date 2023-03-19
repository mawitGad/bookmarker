import { useState, useEffect, useRef } from "react";
import { useStore } from "../../appContext";
export default function useBookmarkAdder() {
  const { setAdder, bookmarkStore } = useStore();
  const [name, setName] = useState<string>();
  const [url, setUrl] = useState<string>();
  const adderLoadFlag = useRef(false);

  useEffect(close_on_click_outside, []);

  return { setName, setUrl, addBookmark };

  function addBookmark(e) {
    e.preventDefault();
    bookmarkStore.addBookmark({ name, url, color: get_rand_color() });
    setAdder?.(false);
  }

  function close_on_click_outside() {
    const callback = (e) => {
      if (!adderLoadFlag.current) return (adderLoadFlag.current = true);
      const ui = document.getElementById("bookmark-adder-ui");
      if (!ui) return;
      if (!ui.contains(e.target)) setAdder?.(false);
    };
    window.addEventListener("click", callback);

    return () => window.removeEventListener("click", callback);
  }
}

function get_rand_color() {
  var color = Math.floor(Math.random() * Math.pow(256, 3)).toString(16);
  while (color.length < 6) {
    color = "0" + color;
  }
  return "#" + color;
}
