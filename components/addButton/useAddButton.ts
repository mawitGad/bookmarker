import { useStore } from "../../appContext.tsx";

export default function useAddButton() {
  const { setAdder } = useStore();
  return { openBookmarkAdderUi };
  function openBookmarkAdderUi() {
    setAdder(true);
  }
}
