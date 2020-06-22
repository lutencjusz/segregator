import React, { Fragment } from "react";
import { connect } from "react-redux";
import { SuspenseErrorBoundary } from "components";
import CandidateItem from "./CandidateItem.jsx";
import API from "data/fetch";
import { useQuery } from "react-query";
import { setSelectedCandidate } from "data/actions/dictionary.actions.js";

const FormCandidate = React.lazy(() => import("./FormCandidate.jsx"));

const AddCandidate = ({ selectedCandidate, setSelectedCandidate }) => {

  const { data: candidates } = useQuery(
    ['candidates', {cache: false}],
    API.dictionary.fetchAll
  );

  const { data: categories } = useQuery(
    ['categories', {cache: true}],
    API.dictionary.fetchAll
  );

  return (
    <SuspenseErrorBoundary>
      {categories && candidates ? (
        <Fragment>
          <div className="row odstep">
            {selectedCandidate ? (
              <Fragment>
                <div className="col-2 doLewej">
                  {/* <ul className="list-group list-group-flush active"> */}
                    {candidates.map((item) => (
                      <CandidateItem
                        key={item.id}
                        item={item}
                        onClick={() => setSelectedCandidate(item)}
                      />
                    ))}
                  {/* </ul> */}
                </div>
                <div className="col-1" />
                <div className="col-6">
                  <FormCandidate />
                </div>
              </Fragment>
            ) : (
              <div className="col-12">
                {/* <ul className="list-group list-group-flush active"> */}
                  {candidates.map((item) => (
                    <CandidateItem
                      key={item.id}
                      item={item}
                      onClick={() => setSelectedCandidate(item)}
                    />
                  ))}
                {/* </ul> */}
              </div>
            )}
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
