import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

Messageitem.propTypes = {
    
};

function Messageitem(props) {
    // console.log(props);
    return (
        <div className={`d-flex ${props.user?'justify-content-end':' justify-content-start'} mb-4`}>
            <div className="img_cont_msg">
              <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" className="rounded-circle user_img_msg" />
            </div>
            <div className="msg_cotainer">
              {props.message}
              <span className={props.user?'msg_time':'msg_time_send'}>8:40 AM, Today</span>
            </div>
        </div>
    );
}

export default Messageitem;