import React from "react";
import { connect } from "react-redux";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { Drag } from "../dragDrop";
import  Trashes  from "../trashes";
import  Description  from "../description";
import { setSelected } from "../../data/actions/dictionary.actions";

export const Searcher = ({ dictionary, selected, setSelected }) => {
  const changeSeletedId = (newId) => {
    setSelected(newId);
    // console.log({newId});
  };

  return (
    <div className="row">
      {console.log({selected})}
      <div className={(selected && !selected.customOption) ? "col-6" : "col-12"}>
        <Drag data={dictionary[0]}>
          <Typeahead
            id="my-typeahead-id"
            defaultSelected={[dictionary[0]]}
            onChange={(selected) => changeSeletedId(selected[0])} // zapisuje tylko pierwszy wybrany
            labelKey="name"
            options={dictionary}
            allowNew={true}
            newSelectionPrefix="Nowy wybór: "
            shouldSelect={true}
          />
        </Drag>
        <Trashes />
      </div>
      {(selected && !selected.customOption) ? (
        <div className="col-6">
          <Description/>
        </div>
      ) : null}
    </div>
  );
};

export default connect(
  (state) => {
    return {
      dictionary: state.dictionary.dictionary,
      selected: state.dictionary.selected,
    };
  },
  {
    setSelected,
  }
)(Searcher);
