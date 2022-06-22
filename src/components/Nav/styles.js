import styled from "styled-components";

export const Menu = styled.ul`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;

  a {
    text-decoration: none;
    color: #484848;
    font-size: 16px;
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