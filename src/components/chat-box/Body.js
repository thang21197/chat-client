import React,{useState,useCallback, useEffect} from 'react';
import Messageitem from './Messageitem';
import PropTypes from 'prop-types';

Body.propTypes = {
    
};

function Body(props) {
    // const [state, setState] = useState(props);
    // const forceUpdate = useCallback(() => updateState({}), []);
    // console.log(props);
    return (
        <div className="card-body msg_card_body">
          { props.messages.map(item=>{
             return <Messageitem key={item.id} user={item.userId == props.user? true :false } message={item.message}/>
            })
          }  
        </div>
    );
}

export default Body;