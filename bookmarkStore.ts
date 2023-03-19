import { BookmarkInterface } from "./types";
import { Dispatch, SetStateAction } from "react";

export default class BookmarkStore {
  setBookmarksUi: () => {};
  constructor(setBookmarks: Dispatch<SetStateAction<BookmarkInterface[]>>) {
    this.setBookmarksUi = setBookmarks;
  }

  addBookmark(bookmark: BookmarkInterface) {
    const bookmarks =
      JSON.parse(window.localStorage.getItem("bookmarks")) || [];
    bookmarks.push(bookmark);
    window.localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    this.setBookmarksUi(bookmarks);
  }
  editBookmark(bookmark: BookmarkInterface, index: number) {
    const bookmarks = JSON.parse(window.localStorage.getItem("bookmarks"));
    bookmarks[index] = bookmark;
    window.localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    this.setBookmarksUi(bookmarks);
  }
  getBookmarks() {
    return JSON.parse(window.localStorage.getItem("bookmarks")) || [];
  }
  deleteBookmark(index: number) {
    let bookmarks = JSON.parse(window.localStorage.getItem("bookmarks"));
    bookmarks = bookmarks.filter((bookmark, i) => i != index);
    window.localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    this.setBookmarksUi(bookmarks);
  }
}
