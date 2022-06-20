import React from 'react';
import Burguer from '../../assets/icons/menu.png';
import User from '../../assets/icons/user.png';
import { Options, Button } from './styles';

export default function index() {
  return (
    <Options>
      <Button>Become A Host</Button>
      <div>
        <img src={Burguer} alt="Burguer"></img>
        <img src={User} alt="User"></img>
      </div>
    </Options>
  )
}