import React from 'react';
import PropTypes from 'prop-types';
import Searchfom from './Searchfom';
import Listfriend from './Listfriend';

Contactlist.propTypes = {
    
};

function Contactlist(props) {
    return (
        <div className="col-md-4 col-xl-3 chat"><div className="card mb-sm-3 mb-md-0 contacts_card">
        <div className="card-header">
          <Searchfom/>
        </div>
        <div className="card-body contacts_body">
        <Listfriend/> 
        </div>
        <div className="card-footer" />
      </div></div>
    );
}

export default Contactlist;