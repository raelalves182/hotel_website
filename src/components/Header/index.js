import React from 'react';
import Logo from '../../assets/images/logo-hotel.png';
import Nav from '../Nav/index';
import Options from '../Options/index';
import Search from '../Search/index';
import { Header } from './styles';

export default function index() {
  return (
    <Header>
      <div className='container'>
        <div className='row middle-xs between-xs'>
          <div className='col-xs-6 col-md-2'>
            <a href='./'><img src={Logo} alt="Logo"></img></a>
          </div>

          <div className='col-xs-6 col-sm-6'>
            <Nav />
          </div>

          <div className='col-xs-3 col-md-4 col-sm-3'>
            <Options />
          </div>

          <div>
            <Search />
          </div>
        </div>
      </div>
    </Header>
  )
}