import { Dispatch, SetStateAction } from "react";
import { BookmarkStore } from "./bookmarkStore";

export interface BookmarkProps {
  url: string;
  name: string;
  index: string;
}

export interface BookmarkInterface {
  url: string;
  name: string;
  color: string;
}

export type authContextType = {
  adder: boolean;
  setAdder?(): Dispatch<SetStateAction<boolean>>;
  editor: boolean;
  setEditor?(): Dispatch<SetStateAction<boolean>>;
  bookmarkStore?: BookmarkStore;
  bookmarks?: BookmarkInterface[];
  editingBookmark?: BookmarkProps;
  setEditingBookmark?: Dispatch<SetStateAction<BookmarkProps>>;
};
