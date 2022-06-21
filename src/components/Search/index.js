import React from 'react';
import Img from '../../assets/icons/vector.png';
import { Search, SearchHeaders, SearchBar } from './styles';

export default function index() {
  return (
    <Search>
      <SearchHeaders>
        <ul>
          <li><a href='/'>Find</a></li>
          <li><a href='/'>Rooms</a></li>
          <li><a href='/'>Flats</a></li>
          <li><a href='/'>Hostels</a></li>
          <li><a href='/'>Villas</a></li>
        </ul>
      </SearchHeaders>

      <SearchBar>
        <ul>
          <li><a href='/'>Location <span>Which city do you prefer?</span></a></li>
          <li><a href='/'>Check In <span>Add Dates</span></a></li>
          <li><a href='/'>Check Out <span>Add Dates</span></a></li>
          <li><a href='/'>Guests <span>Add Guests</span></a></li>
        </ul>

        <div>
          <img src={Img} alt="vector"></img>
        </div>
      </SearchBar>
    </Search>
  )
}
