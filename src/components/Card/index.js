import React from 'react';
import { Card, Circle, Content } from './styles';
import Heart from '../../assets/icons/heart.png';

export default function index() {
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
