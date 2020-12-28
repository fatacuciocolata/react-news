import React from "react";
import { FaNewspaper } from "react-icons/fa";
import styled from "styled-components";

const Navbar = styled.div`
  background: #2f5096;
  padding: 10px;
  color: #fff;
`;
export const Header = () => {
  return (
    <Navbar>
      <FaNewspaper /> Newsfeed
    </Navbar>
  );
};
