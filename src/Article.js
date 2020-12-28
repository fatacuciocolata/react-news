import React, { useContext } from "react";
import { MdDateRange } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import styled from "styled-components";

const Box = styled.div`
  width: 300px;
  border-bottom: 1px solid #ddd;
  margin-right: 30px;
  margin-bottom: 10px;
  margin-top: 10px;
  padding-bottom: 20px;
`;
const Img = styled.div`
  img {
    width: 100%;
  }
`;
const Title = styled.div`
  font-size: 15px;
`;
const Description = styled.div`
  font-size: 13px;
`;
const Button = styled.div`
  button {
    background: #fddb3a;
    border: 0;
    padding: 10px;
    margin-top: 15px;
    cursor: pointer;
  }
  a {
    text-decoration: none;
  }
`;
const DateAndAuthor = styled.div`
  display: flex;
  justify-content: space-between;
`;
const PublishedAt = styled.div`
  font-size: 10px;
  margin-bottom: 10px;
`;
const Author = styled.div`
  font-size: 10px;
  float: right;
  span {
    font-weight: bold;
  }
`;
export const Article = ({ article }) => {
  const date = article.publishedAt;
  let [month, day, year] = new Date(date).toLocaleDateString().split("/");
  return (
    <Box>
      <Img>
        <img src={article.urlToImage} />
      </Img>
      <Title>
        <h3>{article.title}</h3>
      </Title>
      <DateAndAuthor>
        <PublishedAt>
          <MdDateRange /> {day}/{month}/{year}
        </PublishedAt>
        <Author>
          <span>
            <FaUserAlt />
          </span>
          {article.author}
        </Author>
      </DateAndAuthor>
      <Description>{article.description}</Description>
      <Button>
        <a href={article.url}>
          <button>Read more</button>
        </a>
      </Button>
    </Box>
  );
};
