import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { SuspenseErrorBoundary } from "components";
import CandidateItem from "./CandidateItem.jsx";
import API from "data/fetch";
import { useQuery } from "react-query";
import { setCandidates } from "data/actions/dictionary.actions.js";

const AddCandidate = ({ categories, candidates, setCandidates }) => {
  const { data: allCandidates } = useQuery(
    "allCandidates",
    API.dictionary.fetchAllCandidates
  );

  useEffect(() => {
    //zamiast useMemo, które powoduje błąd
    setCandidates(allCandidates);
  }, [allCandidates, setCandidates]);

  return (
    <SuspenseErrorBoundary>
      {categories && candidates ? (
        <Fragment>
          <div className="row">
            <div className="col-2">
              <ul className="list-group list-group-flush">
                {candidates.map((item) => (
                  <CandidateItem key={item.id} item={item} />
                ))}
              </ul>
            </div>
            <div className="col-8">
              <div className="media">
                <img
                  src={categories[0].image}
                  className="mr-3"
                  alt={categories[0].name}
                />
                <div className="media-body">
                  <h4 className="mt-0">{categories[0].name}</h4>
                  <h5>należy wrzucić do pojemników na {categories[0].name}</h5>
                  Krótki opis dlaczego
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      ) : null}
    </SuspenseErrorBoundary>
  );
};

export default connect(
  (state) => {
    return {
      categories: state.dictionary.categories,
      candidates: state.dictionary.candidates,
    };
  },
  {
    setCandidates,
  }
)(AddCandidate);
