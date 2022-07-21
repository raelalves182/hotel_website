import React from 'react';
import { Card, Circle, Content } from './styles';
import Heart from '../../assets/icons/heart.png';

const CardOne = () => {
  return (
    <>
      <Card>
        <Content>
          <div>
            <img src={Heart} alt="heart up" ></img>
          </div>
          <div>
            <Circle></Circle>
            <h1>Well Furnished Apartment</h1>
            <span>100 Smart Street, LA, USA</span>
          </div>
        </Content>
      </Card>
    </>
  )
}

const CardTwo = () => {
  return (
    <>
      <CardTwo>
        <Content>
          <div>
            <img src={Heart} alt="heart up" ></img>
          </div>
          <div>
            <span>$ 1000 - 5000 USD</span>
          </div>
        </Content>
      </CardTwo>
    </>
  )
}

export {
  CardOne,
  CardTwo
};
