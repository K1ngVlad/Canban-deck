// import logo from './logo.svg';
import { Component } from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Main from './components/Main/Main.jsx';
import { observer } from 'mobx-react';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default observer(App);
