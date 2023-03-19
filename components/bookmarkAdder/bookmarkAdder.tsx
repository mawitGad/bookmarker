import useBookmarkAdder from "./useBookmarkAdder";

export default function BookmarkAdder() {
  const { setName, setUrl, addBookmark } = useBookmarkAdder();
  return (
    <section className=" slide-in text-white fixed w-screen h-screen top-0 left-0 grid place-items-center">
      <form
        id="bookmark-adder-ui"
        className="flex flex-col p-10 menu"
        onSubmit={addBookmark}
      >
        <label className="">
          <span className="mr-2 inline-block w-[50px]">Name</span>
          <input
            type="text"
            className="input p-1 px-2 min-w-[210px]"
            placeholder="example"
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label className="my-4">
          <span className="mr-2 inline-block w-[50px]">Url</span>
          <input
            type="text"
            className="input p-1 px-2 min-w-[210px]"
            placeholder="https://www.example.com"
            onChange={(e) => setUrl(e.target.value)}
          />
        </label>
        <button
          className="border w-fit flex m-auto bookmark px-2 py-1 rounded-full items-center my-2"
          onClick={addBookmark}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 35 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.5 35C16.7917 35 16.1983 34.76 15.72 34.28C15.24 33.8017 15 33.2083 15 32.5V20H2.5C1.79167 20 1.1975 19.76 0.7175 19.28C0.239167 18.8017 0 18.2083 0 17.5C0 16.7917 0.239167 16.1975 0.7175 15.7175C1.1975 15.2392 1.79167 15 2.5 15H15V2.5C15 1.79167 15.24 1.1975 15.72 0.7175C16.1983 0.239167 16.7917 0 17.5 0C18.2083 0 18.8025 0.239167 19.2825 0.7175C19.7608 1.1975 20 1.79167 20 2.5V15H32.5C33.2083 15 33.8017 15.2392 34.28 15.7175C34.76 16.1975 35 16.7917 35 17.5C35 18.2083 34.76 18.8017 34.28 19.28C33.8017 19.76 33.2083 20 32.5 20H20V32.5C20 33.2083 19.7608 33.8017 19.2825 34.28C18.8025 34.76 18.2083 35 17.5 35Z"
              fill="white"
            />
          </svg>
          <span className=" ml-2">Add</span>
        </button>
      </form>
    </section>
  );
}
