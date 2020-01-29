import React from 'react';
import './App.css';

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// my components
import MyHeader from './components/header'
import MyContent from './components/content'

function App() {
  return (
    <div style={{height:'100vh'}} className="App flex flexcol">
      <MyHeader />
      <MyContent  />
    </div>
  );
}

export default App;
