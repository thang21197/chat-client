import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

Chatbox.propTypes = {
    
};

function Chatbox(props) {
    // console.log(props);
    return (
        <div className="col-md-8 col-xl-6 chat">
      <div className="card">
        <Header/>
        <Body user={props.user} messages={props.messages}/>
        <Footer sendMessage={props.sendMessage}/>
      </div>
    </div>
    );
}

export default Chatbox;