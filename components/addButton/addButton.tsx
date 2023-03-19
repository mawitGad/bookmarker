import useAddButton from "./useAddButton";

export default function AddButton() {
  const { openBookmarkAdderUi } = useAddButton();
  return (
    <div
      className="max-w-[240px] grow m-2 w-[120px] h-[100px] bookmark flex justify-center items-center transition-all duration-[0.5s]"
      onClick={openBookmarkAdderUi}
      tabindex={1}
    >
      <div>
        <svg
          width="28"
          height="28"
          viewBox="0 0 35 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.5 35C16.7917 35 16.1983 34.76 15.72 34.28C15.24 33.8017 15 33.2083 15 32.5V20H2.5C1.79167 20 1.1975 19.76 0.7175 19.28C0.239167 18.8017 0 18.2083 0 17.5C0 16.7917 0.239167 16.1975 0.7175 15.7175C1.1975 15.2392 1.79167 15 2.5 15H15V2.5C15 1.79167 15.24 1.1975 15.72 0.7175C16.1983 0.239167 16.7917 0 17.5 0C18.2083 0 18.8025 0.239167 19.2825 0.7175C19.7608 1.1975 20 1.79167 20 2.5V15H32.5C33.2083 15 33.8017 15.2392 34.28 15.7175C34.76 16.1975 35 16.7917 35 17.5C35 18.2083 34.76 18.8017 34.28 19.28C33.8017 19.76 33.2083 20 32.5 20H20V32.5C20 33.2083 19.7608 33.8017 19.2825 34.28C18.8025 34.76 18.2083 35 17.5 35Z"
            fill="white"
          />
        </svg>
        <div className="mt-2">Add</div>
      </div>
    </div>
  );
}
