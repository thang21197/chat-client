import React,{useState} from 'react';
import logo from './logo.svg';
import './App.scss';
import Contactlist from './components/contact-list';
import Chatbox from './components/chat-box';
import _map from 'lodash/map';
import io from 'socket.io-client';

function App() {
  const [messages,setMessages]=useState({id: 1, userId: 0, message: 'Hello'});
  const [user,setUser]=useState(null);
  const socket=null;
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
