import { useStore } from "../../appContext";

export default function useAddButton() {
  const { setAdder } = useStore();
  return { openBookmarkAdderUi };
  function openBookmarkAdderUi() {
    setAdder(true);
  }
}
