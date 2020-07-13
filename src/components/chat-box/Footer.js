import React from 'react';
import PropTypes from 'prop-types';

Footer.propTypes = {
    
};

function Footer(props) {
    return (
        <div className="card-footer">
        <div className="input-group">
          <div className="input-group-append">
            <span className="input-group-text attach_btn"><i className="fas fa-paperclip" /></span>
          </div>
          <textarea name className="form-control type_msg" placeholder="Type your message..." defaultValue={""} />
          <div className="input-group-append">
            <span className="input-group-text send_btn"><i className="fas fa-location-arrow" /></span>
          </div>
        </div>
      </div>
    );
}

export default Footer;