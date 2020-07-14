import React,{useState,useEffect} from 'react';
import logo from './logo.svg';
import $ from 'jquery';
import './App.scss';
import Contactlist from './components/contact-list';
import Chatbox from './components/chat-box';
import _map from 'lodash/map';
import io from 'socket.io-client';

function App() {
  const [messages,setMessages]=useState([{id: 1, userId: 0, message: 'Hello'}]);
  const [user,setUser]=useState(null);
  var socket=null;
  // var count= messages.length;
  useEffect(()=>{
    socket=io('localhost:6969');
 });

  useEffect(()=>{
      socket.on('id',res=>setUser(res));
      socket.on('newMessage',(response) => {newMessage(response)} );
  },[messages]);

  const newMessage = (m) => {
      const mess = messages;
      let ids=_map(messages,'id');
      let max=Math.max(...ids);
      mess.push({
        id:max+1,
        userId:m.id,
        message:m.data
      });
      
      let objMessage=$('.msg_card_body');
      // console.log(objMessage);
      if (objMessage[0].scrollHeight - objMessage[0].scrollTop === objMessage[0].clientHeight ) {
        setMessages(mess)
        objMessage.animate({ scrollTop: objMessage.prop('scrollHeight') }, 300); //tạo hiệu ứng cuộn khi có tin nhắn mới
      } else {
        setMessages(mess)
          if (m.id === user) {
              objMessage.animate({ scrollTop: objMessage.prop('scrollHeight') }, 300);
          }
      }
  } 

  const sendnewMessage=(m)=>{
    if(m.value){
      // console.log(m.value);
      // socket = io('localhost:6969');
      socket.emit("newMessage",m.value);
      m.value="";
      // console.log(messages);
    }
  }
  
  return (
    <div className="App">
       <div className="container-fluid h-100">
  <div className="row justify-content-center h-100">
    <Contactlist/>
    <Chatbox sendMessage={sendnewMessage} user={user} messages={messages} />
  </div>
</div>

    </div>
  );
}

export default App;
