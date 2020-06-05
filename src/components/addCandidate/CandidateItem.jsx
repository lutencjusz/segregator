import React from 'react';

const CandidateItem = ({item}) => {
    return (
        <li key={item.id} className="list-group-item">
            {item.name}
        </li>
    )
}

export default CandidateItem;