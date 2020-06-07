import React from "react";
import { connect } from "react-redux";
import API from "data/fetch";
import { useQuery } from "react-query";

const Description = ({ selected}) => {

  const { data: categories } = useQuery(
    "categories",
    API.dictionary.fetchAllCategories
  );

  return (
    <div className="media">
      <img
        src={categories[selected.categoryId].image}
        className="mr-3"
        alt={categories[selected.categoryId].name}
      />
      <div className="media-body">
        <h4 className="mt-0">{selected.name}</h4>
        <h5>
          należy wrzucić do pojemników na {categories[selected.categoryId].name}
        </h5>
        Krótki opis dlaczego
      </div>
    </div>
  );
};

export default connect((state) => {
  return {
    selected: state.dictionary.selected,
  };
})(Description);
