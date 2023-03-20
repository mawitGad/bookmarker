import useBookmarkEditor from "./useBookmarkEditor";

export default function BookmarkEditor() {
  const { setName, setUrl, editBookmark, name, url, deleteBookmark } =
    useBookmarkEditor();
  return (
    <section className="slide-in text-white fixed w-screen h-screen top-0 left-0 grid place-items-center">
      <form
        id="bookmark-editor-ui"
        className="flex flex-col p-10 menu"
      >
        <label className="">
          <span className="mr-2 inline-block w-[50px]">Name</span>
          <input
            type="text"
            className="input p-1 px-2 min-w-[210px]"
            placeholder="example"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>
        <label className="my-4">
          <span className="mr-2 inline-block w-[50px]">Url</span>
          <input
            type="text"
            className="input p-1 px-2 min-w-[210px]"
            placeholder="https://www.example.com"
            onChange={(e) => setUrl(e.target.value)}
            value={url}
          />
        </label>
        <div className="flex justify-center">
          <button
            className="border w-fit flex mx-2 bookmark px-2 py-1 rounded-full items-center my-2"
            onClick={editBookmark}
          >
            <span className="px-2">Save</span>
          </button>
          <button
            className="border w-fit flex mx-2 px-2 py-1 rounded-full items-center my-2"
            onClick={deleteBookmark}
          >
            <span className="px-2">Delete</span>
          </button>
        </div>
      </form>
    </section>
  );
}
