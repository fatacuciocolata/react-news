import React, { useContext, useState } from "react";
import { Context } from "./NewsLibrary";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const Search = styled.div`
  background: #fcfcfc;
  padding: 20px 10px 20px 10px;
  margin-bottom: 10px;
`;
const Container = styled.div`
  width: 50%;
`;
const SearchTerm = styled.div`
  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
  }
  input:focus {
    outline: 0;
    border: 1px solid #aaa;
  }
`;
const SortBy = styled.div`
  padding: 10px 0 10px 0;
`;
const Date = styled.div`
  padding: 10px 0 10px 0;
`;
const Button = styled.div`
  button {
    margin-top: 10px;
    cursor: pointer;
    padding: 10px 15px;
    background-color: #dc3545;
    border-color: #dc3545;
    border: 0;
    color: #fff;
  }
`;

export const SearchBox = () => {
  const { term, setTerm } = useContext(Context);
  const { sortBy, setSortBy } = useContext(Context);
  const { from, setFrom } = useContext(Context);
  const { to, setTo } = useContext(Context);

  const [keyword, setKeyword] = useState("");
  const [radio, setRadio] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");

  const { register, handleSubmit } = useForm();
  function onSubmit(data) {
    setTerm(data.keyword);
    setSortBy(data.sortBy);
    setFrom(data.from);
    setTo(data.to);
  }

  return (
    <Search>
      <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
          <SearchTerm>
            <input
              type="text"
              name="keyword"
              placeholder="Search term.."
              ref={register}
              onChange={(e) => setKeyword(e.target.value)}
              value={keyword}
            />
          </SearchTerm>
          <SortBy>
            <b>Sort by:</b>
            <input
              type="radio"
              name="sortBy"
              ref={register({ required: true })}
              onChange={(e) => setRadio(e.target.value)}
              value="latest"
              defaultChecked
            />{" "}
            Latest
            <input
              type="radio"
              name="sortBy"
              ref={register({ required: true })}
              onChange={(e) => setRadio(e.target.value)}
              value="relevance"
            />{" "}
            Relevance
            <input
              type="radio"
              name="sortBy"
              ref={register({ required: true })}
              onChange={(e) => setRadio(e.target.value)}
              value="popularity"
            />{" "}
            Popularity
          </SortBy>
          <Date>
            <b>Sort by date</b>
            <label htmlFor="from"> from: </label>
            <input
              id="from"
              name="from"
              type="date"
              onChange={(e) => setDateFrom(e.target.value)}
              value={dateFrom}
            />
            <label htmlFor="to"> to: </label>
            <input
              id="to"
              name="to"
              type="date"
              ref={register}
              onChange={(e) => setDateTo(e.target.value)}
              value={dateTo}
            />
          </Date>
          <Button>
            <button type="submit">Search</button>
          </Button>
        </form>
      </Container>
    </Search>
  );
};
