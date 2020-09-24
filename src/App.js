import React from 'react';
import './tailwind.css';
import CounterExample from './Components/CounterExample'
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {
  return (
    <div>
      <Header  />
      <CounterExample />
      <Footer />
    </div>
  );
}

export default App;
