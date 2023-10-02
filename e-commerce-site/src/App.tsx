import logo from './logo.svg';
import './App.css';
import React from 'react'
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import Body from './components/Body';

const App: React.FC = () => {
  return (
    <div>
    <Header />
    <Body name='loc'/>
    <Footer />
  </div>
  )
}


export default App;