import React from "react";
import { connect } from "react-redux";
import { Drop } from "../dragDrop";
import Swal from "sweetalert2";
import { LoadingIndicator } from "components";
import { setSelectedCategories } from "data/actions/dictionary.actions";
import { useHistory } from "react-router";

const Trashes = ({ setSelectedCategories, categories, selected }) => {
  const getSelected = (categoryId) => {
    console.log({ selected }, { categoryId });
    if (selected && categoryId !== selected.categoryId) {
      Swal.fire({
        title: `Napisz dlaczego chcesz zmienić kategorię z ${
          categories[selected.categoryId].name
        } na ${categories[categoryId].name}?`,
        input: "text",
        showCancelButton: true,
        cancelButtonText: "Rezygnuję",
        confirmButtonText: "Zmień kategorię",
      }).then((result) => {
        console.log({ result });
      });
    }
  };

  const { push } = useHistory();
  
  const pushButton = (newCategory) => {
    setSelectedCategories(newCategory)
    push('/pomoc');
  };

  return (
    <React.Suspense fallback={<LoadingIndicator />}>
      {categories
        ? categories.map((category) => (
            <Drop key={category.id} onDrop={(id) => getSelected(category.id)}>
              <button
                className="button_w"
                onClick={() => pushButton(category.id)}
                key={category.id}
              >
                <img
                  border="0"
                  className="odstep"
                  alt={category.name}
                  src={category.image}
                  width="100"
                  height="100"
                />
              </button>
            </Drop>
          ))
        : null}
    </React.Suspense>
  );
};

export default connect(
  (state) => {
    return {
      categories: state.dictionary.categories,
      selected: state.dictionary.selected,
    };
  },
  {
    setSelectedCategories,
  }
)(Trashes);
