import styled from "styled-components";

export const Options = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;

  div {
    display: flex;
    align-items: center;
    border-radius: 32px;
    width: 100px;
    background-color: white;
    cursor: pointer;
    gap: 14px;
    justify-content: flex-end;
  }
`;

export const Button = styled.button`
  background: #484848;
  border-radius: 32px;
  padding: 16px 32px;
  border: none;
  cursor: pointer;
  color: white;
`;