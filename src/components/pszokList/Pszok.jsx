import React from 'react';

const Pszok = ({obj}) => {
    return (
        <div className="media pszok">
          <img src={obj.image} className="mr-3" alt={obj.name} />
          <div className="media-body">
            <h4 className="mt-0">{obj.name}</h4>
            <h6>{obj.working}</h6>
            <h6>{obj.street}</h6>
            <h6>tel. {obj.phone}</h6>
          </div>
        </div>
    )
}

export default Pszok;