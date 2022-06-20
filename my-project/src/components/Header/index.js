import React from 'react';
import Logo from '../../assets/images/logo-hotel.png';
import Nav from '../Nav/index';
import Options from '../Options/index';
import { Header } from './styles';

export default function index() {
  return (
    <Header>
      <div className='container'>
        <div className='row middle-xs between-xs'>
          <div className='col-xs-4 col-md-3'>
            <a href='./'><img src={Logo} alt="Logo"></img></a>
          </div>

          <div className='col-xs-6'>
            <Nav />
          </div>

          <div className='col-xs-3 end-xs'>
            <Options />
          </div>
        </div>
      </div>
    </Header>
  )
}