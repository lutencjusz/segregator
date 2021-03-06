import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { Drag } from "../dragDrop";
import Trashes from "../trashes";
import Description from "../description";
import { SuspenseErrorBoundary } from "components";
import { setSelected } from "../../data/actions/dictionary.actions";
import API from "data/fetch";
import { useQuery } from "react-query";
import { fetchAddCandidate } from "data/fetch/dictionary.fetch";
import { queryCache } from "react-query";
import { useTranslation } from "react-i18next";

export const Searcher = ({
  // ładuje dane ze store i wyszukuje pojecia
  selected,
  setSelected,
}) => {
  const { t } = useTranslation();
  const { data: dictionary } = useQuery(
    ['dictionary', {cache: true}],
    API.dictionary.fetchAll
  );

  let { data: candidates } = useQuery(
    ['candidates', {cache: false}],
    API.dictionary.fetchAll
  );

  const { data: categories } = useQuery(
    ['categories', {cache: true}],
    API.dictionary.fetchAll
  );

  const changeSeletedId = async (newId) => {
    setSelected(newId);
    if (newId && newId.customOption) {
      console.log({candidates});
      if (candidates.length > 0) {
        newId.id =
          (await candidates.reduce(function (prev, current) {
            // znajduje max
            return prev.id > current.id ? prev : current;
          }).id) + 1;
      } else {
        newId.id = 1;
      }

      await fetchAddCandidate(newId).then(async () =>
        await queryCache.refetchQueries("candidates")
      );
    }
    // console.log(`changeSelectedId: ${newId}`);
  };
  // console.log({selected})
  return (
    <div className="row">
      <div className={selected && !selected.customOption ? "col-5" : "col-12"}>
        <SuspenseErrorBoundary>
          {dictionary ? (
            <Fragment>
              <Drag
                data={selected}
                image={
                  selected && selected.categoryId
                    ? categories.find(
                        (category) => category.id === selected.categoryId
                      ).image
                    : {}
                }
              >
                <Typeahead
                  className="custom-typeahead"
                  id="my-typeahead-id"
                  onChange={(selected) => changeSeletedId(selected[0])} // zapisuje tylko pierwszy wybrany
                  labelKey="name"
                  options={dictionary}
                  allowNew={true}
                  newSelectionPrefix={`${t("Nowy wybór")}: `}
                  placeholder={`${t("Wprowadź odpad")}...`}
                  shouldSelect={true}
                  minLength={2}
                  dropup={true}
                />
              </Drag>
              <Trashes />
            </Fragment>
          ) : null}
        </SuspenseErrorBoundary>
      </div>
      {selected && !selected.customOption ? (
        <div className="col-7">
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
  },
  {
    setSelected,
  }
)(Searcher);
