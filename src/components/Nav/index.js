import React from 'react';
import { Menu } from './styles';

export default function index() {
  return (
    <div>
      <nav>
        <Menu>
          <li><a href='./'>Find Property</a></li>
          <li><a href='./'>Share Stories</a></li>
          <li><a href='./'>Rental Guides</a></li>
          <li><a href='./'>Download Mobile App</a></li>
        </Menu>
      </nav>
    </div>
  )
}