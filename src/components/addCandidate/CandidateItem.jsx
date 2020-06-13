import React from "react";
import { Drag } from "../dragDrop";

const CandidateItem = ({ item, onClick }) => {
  return (
    <Drag data={item.id}>
      <button key={item.id} onClick={onClick} className="button_w">
        {item.name}
      </button>
    </Drag>
  );
};

export default CandidateItem;
