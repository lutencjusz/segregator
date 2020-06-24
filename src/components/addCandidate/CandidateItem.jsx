import React from "react";
import { Drag } from "../dragDrop";

const CandidateItem = ({ item, onClick, icon }) => {
  return (
    <Drag data={item.id}>
      <button key={item.id} onClick={onClick} className="button_w">
        {item.name}{" "}
        {icon ? <span className={"glyphicon glyphicon-" + icon}></span> : null}
      </button>
    </Drag>
  );
};

export default CandidateItem;
