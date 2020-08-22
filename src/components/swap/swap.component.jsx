import React from 'react';

const Swap = ({ children }) => (  
  <button 
    className="btn btn-outline-success btn-block"
    style={{cursor:'pointer',fontSize:'20px',fontWeight:'bold'}}
  >
    { children }
  </button>
)

export default Swap