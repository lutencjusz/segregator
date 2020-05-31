import React from "react";
import { connect } from "react-redux";

const Description = ({ selected, dictionary, categories }) => {
//   console.log({ selected }, { categories });
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
    dictionary: state.dictionary.dictionary,
    categories: state.dictionary.categories,
    selected: state.dictionary.selected,
  };
})(Description);
