import React, { useState, useEffect } from "react";
import axios from "axios";

const Context = React.createContext();

const Provider = ({ children }) => {
  const [articles, setArticle] = useState([]);
  const [term, setTerm] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  useEffect(() => {
    async function fetchData() {
      if (
        term.length > 0 ||
        sortBy.length > 0 ||
        (from.length > 0 && to.length > 0)
      ) {
        const result = await axios(
          `https://newsapi.org/v2/everything?q=${term}&sortBy=${sortBy}&from=${from}&to=${to}&apiKey=5aa40bd4ff5e456ab16ea57f4e47132b`
        );
        setArticle(result.data.articles);
        console.log(result.data.articles);
        console.log(result);
        return;
      }
      const result = await axios(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=5aa40bd4ff5e456ab16ea57f4e47132b`
      );
      setArticle(result.data.articles);
    }
    fetchData();
  }, [term, sortBy, from, to]);

  const providerValue = {
    articles,
    setArticle,
    term,
    setTerm,
    sortBy,
    setSortBy,
    from,
    setFrom,
    to,
    setTo,
  };
  return <Context.Provider value={providerValue}>{children}</Context.Provider>;
};

export { Context, Provider };
