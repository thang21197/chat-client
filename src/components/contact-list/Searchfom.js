import React from 'react';
import PropTypes from 'prop-types';

Searchfom.propTypes = {
    
};

function Searchfom(props) {
    return (
        <div className="input-group">
            <input type="text" placeholder="Search..." name className="form-control search" />
            <div className="input-group-prepend">
              <span className="input-group-text search_btn"><i className="fas fa-search" /></span>
            </div>
          </div>
    );
}

export default Searchfom;