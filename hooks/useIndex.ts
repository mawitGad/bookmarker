import { useStore } from "../appContext";

export default function useIndex() {
  const { adder, editor, bookmarks } = useStore();

  return { bookmarks, adder, editor };
}
