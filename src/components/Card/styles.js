import styled from "styled-components";

export const Card = styled.div`
  width: 280px;
  height: 340px;
  background: #E0E2E6;
  border-radius: 8px;

  h1 {
    color: #484848;
    font-size: 17px;
  }

  span {
    color: #9A9A9A;
    font-size: 13px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 147px !important;
  padding: 20px;

  div {
    display: flex;
    justify-content: end;
  }

  div + div {
    display: flex;
    flex-direction: column;
    justify-content: end;
    gap: 0;
  }
`;

export const Circle = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: #C2C6CC;
`;