import React, { useContext } from "react";
import { Article } from "./Article";
import { Context } from "./NewsLibrary";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Articles = () => {
  const { articles } = useContext(Context);
  return (
    <Container>
      {articles.map((article, index) => (
        <Article key={index} article={article} />
      ))}
    </Container>
  );
};
