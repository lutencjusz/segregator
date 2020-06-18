import React from "react";
import { connect } from "react-redux";
import API from "data/fetch";
import { useQuery } from "react-query";

const Description = ({ selected}) => {

  const { data: categories } = useQuery(
    "categories",
    API.dictionary.fetchAllCategories
  );

  const obj = categories.find(category => category.id === selected.categoryId)

  return (
    <div className="media">
      <img
        src={obj.image}
        className="mr-3"
        alt={obj.name}
      />
      <div className="media-body">
        <h4 className="mt-0">{obj.name}</h4>
        <h5>
          należy wrzucić do pojemników na {obj.name}
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
