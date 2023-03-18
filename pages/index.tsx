import Image from "next/image";
import { useEffect } from "react";
import Bookmark from "../components/bookmark/bookmark";
import useIndex from "../hooks/useIndex";
import BookmarkAdder from "../components/bookmarkAdder/bookmarkAdder.tsx";
import BookmarkEditor from "../components/bookmarkEditor/bookmarkEditor.tsx";
import AddButton from "../components/addButton/addButton";

export default function Home() {
  const { bookmarks, adder, editor } = useIndex();
  return (
    <>
      <Image
        alt="background"
        src={"/background.jpg"}
        fill
        className="object-cover"
      />
      <main className="w-screen h-screen p-8 text-white relative grid grid-rows-[50px_auto] ">
        <span className="text-[32px] ">Bookmarker</span>
        <section className="flex flex-wrap justify-center items-center overflow-scroll">
          <div className="w-fit max-w-full flex flex-wrap cursor-pointer ">
            {bookmarks.map((bookmark, index) => (
              <Bookmark key={bookmark.url} {...bookmark} index={index} />
            ))}
            <AddButton />
          </div>
        </section>
      </main>

      {adder && <BookmarkAdder />}
      {editor && <BookmarkEditor />}
    </>
  );
}
