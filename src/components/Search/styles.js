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
    position: relative;
  }

  a::after {
    content: '';
    position: absolute;
    width: 0px;
    height: 3px;
    display: block;
    transition: 0.3s;
    background: #484848;
    margin-top: 4px;
  }

  a:hover:after {
    width: 50%;
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
    gap: 60px;
  }

  li + li {
    border-left: 1px solid #DDDDDD;
  }

  a {
    text-decoration: none;
    color: #484848;
    flex-direction: column;
    display: flex;
    font-size: 12px;
    font-weight: 600;
    margin-left: 17px;

    span {
      color: #C2C6CC;
      font-size: 14px !important;
      font-weight: normal;
      margin-top: 4px;
    }
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #484848;
    width: 54px;
    height: 54px;
    margin-left: 30px;
    border-radius: 50%;
    cursor: pointer;
  }
`;