import React, { Fragment } from "react";
import { connect } from "react-redux";
import { SuspenseErrorBoundary } from "components";
import CandidateItem from "./CandidateItem.jsx";
import API from "data/fetch";
import { useQuery } from "react-query";
import { setSelectedCandidate } from "data/actions/dictionary.actions.js";

const FormCandidate = React.lazy(() => import('./FormCandidate.jsx'));

const AddCandidate = ({ selectedCandidate, setSelectedCandidate }) => {
  const { data: candidates } = useQuery(
    "candidates",
    API.dictionary.fetchAllCandidates
  );

  const { data: categories } = useQuery(
    "categories",
    API.dictionary.fetchAllCategories
  );

  return (
    <SuspenseErrorBoundary>
      {categories && candidates ? (
        <Fragment>
          <div className="row odstep">
            <div className="col-2">
              <ul className="list-group list-group-flush">
                {candidates.map((item) => (
                  <CandidateItem
                    key={item.id}
                    item={item}
                    onClick={() => setSelectedCandidate(item)}
                  />
                ))}
              </ul>
            </div>
            <div className="col-1"></div>
            <div className="col-6">
              {selectedCandidate ? (
                <FormCandidate onSubmit={() => console.log("AddCandidate")} />
              ) : null}
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
      selectedCandidate: state.dictionary.selectedCandidate,
    };
  },
  {
    setSelectedCandidate,
  }
)(AddCandidate);
