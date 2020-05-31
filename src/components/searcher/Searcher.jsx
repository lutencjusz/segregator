import React from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { Drag } from '../dragDrop';

export const Searcher = ({ dictionary }) => {
  return (
    <Drag data={dictionary[0]}>
      <Typeahead
        id="my-typeahead-id"
        defaultSelected={[dictionary[0]]}
        onChange={(selected) => {
          console.log(selected);
        }}
        labelKey="name"
        options={dictionary}
      />
    </Drag>
  );
};
