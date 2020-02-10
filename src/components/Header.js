import React from 'react';
import logo from '../logo.svg';
import './Header.scss';

export default function Header() {
  return (
    <header>
      <img src={logo} alt="React" />
      <h1>get this shit done</h1>
      <p>built with react, and crafted with love</p>
    </header>
  )
}