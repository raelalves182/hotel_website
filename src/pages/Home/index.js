import styled from "styled-components";

export const Content = styled.section`
  margin-top: 88px;

  div {
    display: flex;
    gap: 30px;
  }
`;

export const Title = styled.h1`
  color: #484848;
  font-size: 36px;
  line-height: 48px;
  max-width: 340px;
  width: 100%;

  max-width: ${props => `${props.maxWidth}px`};

  &:after {
    content: "";
    display: block;
    width: 140px;
    height: 6px;
    background: #484848;
    margin-top: 24px;
  }
`;

export const Box = styled.section`
  max-width: 1200px;
  height: 395px;
  background: #EFF0F2;
  border-radius: 12px;
  margin-top: 110px;

  > div {
    display: block;
    padding-top: 70px;
    padding-left: 55px;
  }

  h1 {
    color: #484848;
    font-size: 38px;
    line-height: 52px;
    max-width: 328px;
    width: 100%;
    margin: 0 0 24px;
  }

  span {
    color: #9A9A9A;
    font-size: 16px;
  }

  button {
    width: 220px;
    height: 60px;
    background: #484848;
    border-radius: 30px;
    border: none;
    color: #fff;
    cursor: pointer;
    padding: 0;
    margin-top: 34px;
  }
`;