import React from "react";
import {connect} from "react-redux";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { Drag } from "../dragDrop";
import {setSelected} from '../../data/actions/dictionary.actions';

export const Searcher = ({ 
  dictionary,
  setSelected 
}) => {

  const changeSeletedId = (newId) => {
    setSelected(newId);
    // console.log({newId});
  };

  return (
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
  );
};

export default connect (state => {
  return {
    dictionary: state.dictionary.dictionary,
  }
}, {
  setSelected
})(Searcher);

