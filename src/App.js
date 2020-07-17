import React,{useState,useEffect} from 'react';
import logo from './logo.svg';
import $ from 'jquery';
import './App.scss';
import Contactlist from './components/contact-list';
import Chatbox from './components/chat-box';
import _map from 'lodash/map';
import io from 'socket.io-client';

function App() {
  const [messages,setMessages]=useState([]);
  const [user,setUser]=useState({id: '', name: ''});
  const [userOnline,setUserOnline]=useState([]);
  var  socket=io('localhost:6969');
  // var count= messages.length;

  useEffect(()=>{
      socket.on('id',res=>setUser(res));
      socket.on('newMessage',(response) => {newMessage(response)} );
      socket.on('loginFail', (response) => {alert('Tên đã có người sử dụng')});
      socket.on('loginSuccess', (response) => {setUser({id:socket.id,name:response})});
      socket.on('updateUesrList', (response) => {setUserOnline({userOnline: response})});
      // console.log('asdasd');
  },[]);

  // useEffect(()=>{
  //   // socket.on('id',res=>setUser(res));
  //   socket.on('newMessage',(response) => {newMessage(response)} );
  //   // console.log('asdasd');
  // },[messages]);

  const newMessage = (m) => {
      const mess = [...messages];
      let ids=_map(mess,'id');
      let max=Math.max(...ids);
      // console.log(mess);
      mess.push({
        id:max+1,
        userId:m.user.id,
        message:m.data,
        userName: m.user.name
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
      socket.emit("newMessage",{data:m.value,user:user});
      m.value="";
      // setMessages(messages);
    }
  }
  
  const login =()=>{
    //  socket.emit('login',)
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
