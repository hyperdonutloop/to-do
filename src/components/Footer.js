import React from 'react';
import './Footer.scss';

export default function Footer() {
  function reload() {
    localStorage.clear()
    window.location.reload()
  }

  return (
    <footer>
      <button type="reset" onClick={reload}>
        Reload
      </button>
      <br />
      <small>
        Something something here
      </small>
    </footer>
  )


}