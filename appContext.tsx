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
import { BookmarkProps } from "./types";

const authContextDefaultValues: authContextType = {
  adder: false,
  editor: false,
};

const editingBookmarkDefaultValue: BookmarkProps = {
  name: "",
  url: "",
  index: 0,
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
  const [bookmarks, setBookmarks] = useState([]);
  const [editingBookmark, setEditingBookmark] = useState<BookmarkProps>();
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
