import React, { Fragment} from "react";
import { connect } from "react-redux";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { Drag } from "../dragDrop";
import Trashes from "../trashes";
import Description from "../description";
import { SuspenseErrorBoundary } from "components";
import {
  setSelected
} from "../../data/actions/dictionary.actions";
import API from "data/fetch";
import { useQuery } from "react-query";
import { fetchAddCandidate } from "data/fetch/dictionary.fetch";

export const Searcher = ({ // ładuje dane ze store i wyszukuje pojecia
  selected,
  setSelected
}) => {

  const { data: dictionary } = useQuery(
    "dictionary",
    API.dictionary.fetchAllDictionary
  );

  const changeSeletedId = (newId) => {
    setSelected(newId);
    if (newId && newId.customOption) {
      fetchAddCandidate(newId);
    }
    console.log({newId});
  };
  // console.log({dictionary})
  return (
    <div className="row">
      <div className={selected && !selected.customOption ? "col-6" : "col-12"}>
        <SuspenseErrorBoundary>
          {dictionary ? (
            <Fragment>
              <Drag data={"1"}>
                <Typeahead
                  id="my-typeahead-id"
                  // defaultInputValue = "Wprowadź poszukawane hasło"
                  onChange={(selected) => changeSeletedId(selected[0])} // zapisuje tylko pierwszy wybrany
                  labelKey="name"
                  options={dictionary}
                  allowNew={true}
                  newSelectionPrefix="Nowy wybór: "
                  shouldSelect={true}
                />
              </Drag>
              <Trashes />
            </Fragment>
          ) : null}
        </SuspenseErrorBoundary>
      </div>
      {selected && !selected.customOption ? (
        <div className="col-5">
          <Description />
        </div>
      ) : null}
    </div>
  );
};

export default connect(
  (state) => {
    return {
      selected: state.dictionary.selected,
    };
  }, {
    setSelected
  }
)(Searcher);
