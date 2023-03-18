import { useStore } from "../appContext.tsx";

export default function useIndex() {
  const { adder, editor, bookmarks } = useStore();

  return { bookmarks, adder, editor };
}
