import React from 'react';

const CandidateItem = ({item, onClick}) => {
    return (
        <li key={item.id} onClick = {onClick} className="button_w list-group-item list-group-item-action">
            {item.name}
        </li>
    )
}

export default CandidateItem;