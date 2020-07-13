import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Contactlist from './components/contact-list';
import Chatbox from './components/chat-box';
function App() {
  return (
    <div className="App">
       <div className="container-fluid h-100">
  <div className="row justify-content-center h-100">
    <Contactlist/>
    <Chatbox/>
  </div>
</div>

    </div>
  );
}

export default App;
