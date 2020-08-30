import React from 'react';
import Header from './components/Header'
import Nav from './components/Nav'
import Main from './components/Main'
import './App.css';
import AppProvider from './context/contextProvider';

function App() {
  return (
    <AppProvider>
      <div className="App">
        <Header></Header>
        <Nav></Nav>
        <Main></Main>
      </div>
    </AppProvider>
  );
}

export default App;