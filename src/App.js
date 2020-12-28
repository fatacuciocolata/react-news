import React from "react";
import "./App.css";
import { Provider as NewsProvider } from "./NewsLibrary";
import { Header } from "./Header";
import { Articles } from "./DisplayArticles";
import { SearchBox } from "./SearchBar";

export default function App() {
  return (
    <NewsProvider>
      <div className="App">
        <Header />
        <SearchBox />
        <Articles />
      </div>
    </NewsProvider>
  );
}
