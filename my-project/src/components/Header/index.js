import React from 'react';
import Logo from '../../assets/images/logo-hotel.png';
import { Button, Header } from './styles';

export default function index() {
  return (
    <Header>
      <img src={Logo} alt="Logo"></img>

      <nav>
        <ul>
          <li>Find Property</li>
          <li>Share Stories</li>
          <li>Rental Guides</li>
          <li>Download Mobile App</li>
        </ul>
      </nav>

      <Button>Become A Host</Button>
    </Header>
  )
}