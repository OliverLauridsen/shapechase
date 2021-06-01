import React, { useState } from 'react';
import './App.scss';
import Header from './components/header';
import CardContainer from './components/card_container';

function App() {

  const [count, setCount] = useState(4);


  return (
    <div className="app">
      <span className="front_page_wrapper">
        <Header />
        <main className="app_main">
          <CardContainer />
        </main>
      </span>
    </div>
  ); 
  
}

export default App;
