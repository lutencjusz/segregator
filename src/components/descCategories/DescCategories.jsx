import React, { Fragment } from "react";
import { connect } from "react-redux";
import Trashes from "../trashes";
import { SuspenseErrorBoundary } from "components";
import API from "data/fetch";
import { useQuery } from "react-query";

const DescCategories = ({ selectedCategories }) => {
  
  const { data: categories } = useQuery(
    "categories",
    API.dictionary.fetchAllCategories
  );

  const obj = categories.find(category => category.id === selectedCategories)

  return (
    <SuspenseErrorBoundary>
      {categories ? (
        <Fragment>
          <div className="row">
            <Trashes />
          </div>
          <div className="row">
            <div className="col-2" />
            <div className="col-8">
              <div className="media">
                <img
                  src={obj.image}
                  className="mr-3"
                  alt={obj.name}
                />
                <div className="media-body">
                  <h4 className="mt-0">
                    {obj.name}
                  </h4>
                  <h5>
                    należy wrzucić do pojemników na{" "}
                    {obj.name}
                  </h5>
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

export default connect((state) => {
  return {
    selectedCategories: state.dictionary.selectedCategories,
  };
})(DescCategories);
