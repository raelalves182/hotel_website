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

          <div>
            <Nav />
          </div>

          <div>
            <Options />
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='row'>
          <div>
            <Search />
          </div>
        </div>
      </div>
    </Header>
  )
}