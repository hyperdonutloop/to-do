import React from 'react';
import styles from './App.module.scss'

//components
import Header from './components/Header.js';
import Todos from './components/Todos.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <Todos />
      <Footer />
    </div>
  );
}

export default App;
