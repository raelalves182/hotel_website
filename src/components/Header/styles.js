import styled from "styled-components";
import Bg from '../../assets/images/Gojou.jpg';

export const Header = styled.header`
  padding: 24px 0;
  background: url(${Bg}) no-repeat center;
  height: 600px;

  div + div {
    display: flex;
    justify-content: center;
  }

  div + div > div > div > div {
    margin-top: 360px;
  }
`;