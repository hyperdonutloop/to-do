import React from 'react';
import logo from '../logo.svg';
import './Header.scss';

export default function Header() {
  return (
    <header>
      <img src={logo} alt="React" />
      <h1>localtodo-react</h1>
      <p>a simple react to-do list blibbity blah</p>
    </header>
  )
}