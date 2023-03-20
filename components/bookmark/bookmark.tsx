import { BookmarkProps } from "../../types";
import useBookmark from "./useBookmark";

export default function Bookmark(props: BookmarkProps) {
  const { name, short, url, openBookmarkEditorUi, openUrl, color } =
    useBookmark(props);

  return (
    <div
      onClick={openUrl}
      className=" m-2 max-w-[240px] w-[120px] h-[100px] max-h-[100px] grow  bookmark flex justify-center items-center group transition-all duration-[0.5s]"
    >
      {/* menu Icon Start */}
      <div
        onClick={openBookmarkEditorUi}
        className={`absolute flex top-0 right-0 py-[15px] px-2 rounded-full border-none hover:bg-[#ffffff30] opacity-0 group-hover:opacity-100 transition-all duration-[0.5s]`}
      >
        <div className="w-[5px] mx-[1px] h-[5px] bg-white rounded-full"></div>
        <div className="w-[5px] mx-[1px] h-[5px] bg-white rounded-full"></div>
        <div className="w-[5px] mx-[1px] h-[5px] bg-white rounded-full"></div>
      </div>
      {/* menu Icon End */}
      <div className="grid place-items-center">
        <div
          className={`w-[35px] h-[35px] grid place-items-center rounded-full`}
          style={{ background: color }}
        >
          {short}
        </div>
        <div className="mt-2">{name}</div>
      </div>
    </div>
  );
}
