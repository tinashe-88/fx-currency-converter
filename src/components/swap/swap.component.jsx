import React from 'react';

const Swap = ({ children }) => (  
    <div>
        <button 
            className="btn btn-light col-lg-2 col-md-2 col-sm-2 align-self-center"
            style={{cursor:'pointer'}}
        >
            { children }
        </button>
    </div>
)

export default Swap