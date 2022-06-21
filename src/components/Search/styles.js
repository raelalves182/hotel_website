import styled from "styled-components";

export const Search = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SearchHeaders = styled.div`
  ul {
    list-style: none;
    display: flex;
    gap: 30px
  }
  
  li:first-child {
    font-size: 40px;
    font-weight: 700;
  }
  
  a {
    text-decoration: none;
    color: #484848;
  }
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 35px;
  width: 754px;
  height: 70px;

  ul {
    display: flex;
    padding: 0;
    list-style: none;
  }

  a {
    text-decoration: none;
    color: #484848;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #484848;
    width: 54px;
    height: 54px;
    border-radius: 50%;
    cursor: pointer;
  }
`;