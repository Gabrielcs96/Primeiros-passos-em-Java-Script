import React from 'react'
import './App.css'
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header'


function App() {
  return (
      <React.Fragment>

    <Header/>
    <Dashboard/>

      </React.Fragment>
   
  );
}

export default App;
