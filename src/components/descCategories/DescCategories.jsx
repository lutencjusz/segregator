import React from "react";
import { connect } from "react-redux";
import Trashes from "../trashes";
import { SuspenseErrorBoundary } from "components";

const DescCategories = ({ categories, selectedCategories }) => {
  const selectedCategoriesInt = parseInt(selectedCategories);
  console.log({ selectedCategoriesInt, categories });
  return (
    <SuspenseErrorBoundary>
      {categories ? (
        <div className="row">
          <div className="col-2">
            <Trashes />
          </div>
          <div className="col-10">
            <div className="media">
              <img
                src={categories[selectedCategoriesInt].image}
                className="mr-3"
                alt={categories[selectedCategoriesInt].name}
              />
              <div className="media-body">
                <h4 className="mt-0">{categories[selectedCategoriesInt].name}</h4>
                <h5>należy wrzucić do pojemników na {categories[selectedCategoriesInt].name}</h5>
                Krótki opis dlaczego
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </SuspenseErrorBoundary>
  );
};

export default connect((state) => {
  return {
    categories: state.dictionary.categories,
  };
})(DescCategories);
