import React from 'react';
import $ from 'jquery';
import PropTypes from 'prop-types';

Header.propTypes = {
    
};

function Header(props) {
     const handleToggle = () =>{
        $('.action_menu').toggle();
     }
    return (
        <div className="card-header msg_head">
          <div className="d-flex bd-highlight">
            <div className="img_cont">
              <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" className="rounded-circle user_img" />
              <span className="online_icon" />
            </div>
            <div className="user_info">
              <span>Chat with Khalid</span>
              <p>1767 Messages</p>
            </div>
            <div className="video_cam">
              <span><i className="fas fa-video" /></span>
              <span><i className="fas fa-phone" /></span>
            </div>
          </div>
          <span id="action_menu_btn" onClick={handleToggle}><i className="fas fa-ellipsis-v" /></span>
          <div className="action_menu">
            <ul>
              <li><i className="fas fa-user-circle" /> View profile</li>
              <li><i className="fas fa-users" /> Add to close friends</li>
              <li><i className="fas fa-plus" /> Add to group</li>
              <li><i className="fas fa-ban" /> Block</li>
            </ul>
          </div>
        </div>
    );
}

export default Header;