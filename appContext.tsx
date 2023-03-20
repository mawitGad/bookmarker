import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";
import { authContextType } from "./types";
import BookmarkStore from "./bookmarkStore";
import { BookmarkProps, BookmarkInterface } from "./types";

const editingBookmarkDefaultValue: BookmarkProps = {
  name: "",
  url: "",
  index: 0,
};

const authContextDefaultValues: authContextType = {
  adder: false,
  editor: false,
  editingBookmark : editingBookmarkDefaultValue,
  bookmarks : []
};


const AuthContext = createContext<authContextType>(authContextDefaultValues);

export function useStore(): authContextType {
  return useContext(AuthContext);
}

type Props = {
  children: ReactNode;
};

export function StoreProvider({ children }: Props) {
  const [adder, setAdder] = useState(false);
  const [editor, setEditor] = useState(false);
  const [bookmarks, setBookmarks] = useState<BookmarkInterface[]>([]);
  const [editingBookmark, setEditingBookmark] = useState<BookmarkProps>(
    editingBookmarkDefaultValue
  );
  const bookmarkStore = new BookmarkStore(setBookmarks);

  useEffect(() => {
    setBookmarks(bookmarkStore.getBookmarks());
  }, []);

  return (
    <AuthContext.Provider
      value={{
        adder,
        setAdder,
        editor,
        setEditor,
        bookmarkStore,
        bookmarks,
        editingBookmark,
        setEditingBookmark,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
