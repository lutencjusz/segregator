import React from 'react';

const CandidateItem = ({item, onClick}) => {
    return (
        <button key={item.id} onClick = {onClick} className="button_w">
            {item.name}
        </button>
    )
}

export default CandidateItem;