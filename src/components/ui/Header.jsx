import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <StContainer>
      <div>My Todo List (with Redux)</div>
      <div>React Week 2</div>
    </StContainer>
  );
};
export default Header;

const StContainer = styled.div`
  border: 1px solid #ddd;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  margin-bottom: 24px;
`;
