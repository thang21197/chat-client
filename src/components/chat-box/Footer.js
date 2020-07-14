import React,{useRef,useReducer} from 'react';
import PropTypes from 'prop-types';

// Footer.propTypes = {
//   sendMessage:PropTypes.string
// };

// Footer.defaultProps = {
//   sendMessage: ''
// };

function Footer(props) {
    const messageInput=useRef('');
    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

    const checkEnter=(e) => {
      if (e.keyCode === 13) {
        props.sendMessage(messageInput.current);
        messageInput.current.value="";
        forceUpdate();
        // messageInput.current.focus;
        // console.log(messageInput.current.value);
      }
    } 
    return (
        <div className="card-footer">
        <div className="input-group">
          <div className="input-group-append">
            <span className="input-group-text attach_btn"><i className="fas fa-paperclip" /></span>
          </div>
          <textarea ref={messageInput} onKeyUp={checkEnter} className="form-control type_msg" placeholder="Type your message..." />
          <div className="input-group-append" onClick={props.sendMessage(messageInput.current)} >
            <span className="input-group-text send_btn"><i className="fas fa-location-arrow" /></span>
          </div>
        </div>
      </div>
    );
}

export default Footer;