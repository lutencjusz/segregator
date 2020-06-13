import React from "react";
import { connect } from "react-redux";
import { Drop } from "../dragDrop";
import Swal from "sweetalert2";
import { LoadingIndicator } from "components";
import {
  setSelectedCategories,
  setSelected,
} from "data/actions/dictionary.actions";
import { useHistory } from "react-router";
import ButtonNew from "../buttonNew";
import API from "data/fetch";
import { useQuery } from "react-query";
import { toast } from "react-toastify";

const Trashes = ({ setSelectedCategories, setSelected, selected }) => {
  const { data: categories } = useQuery(
    "categories",
    API.dictionary.fetchAllCategories
  );

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
        if (result.isConfirmed) {
          const newCategory = {
            name: selected.name,
            id: selected.id,
            categoryId,
            description: result.value,
            modifiedCategory: true,
          };
          API.dictionary.fetchAddCandidate(newCategory).then(function (defs) {
            // żeby pobrać wartości promise
            if (defs.status !== "error") {
              setSelected(newCategory);
            } else {
              toast.error(
                `Pojęcie "${newCategory.name}" oczekuje na rozpatrzenie!!!`,
                {
                  position: "top-right",
                  autoClose: 2000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                }
              );
            }
          });
        }
      });
    }
  };

  const { push } = useHistory();

  const pushButton = (newCategory) => {
    setSelectedCategories(newCategory);
    push("/pomoc");
  };

  return (
    <React.Suspense fallback={<LoadingIndicator />}>
      {categories
        ? categories.map((category) => (
            <Drop key={category.id} onDrop={(id) => getSelected(category.id)}>
              <ButtonNew
                category={category}
                size={100}
                onClick={() => pushButton(category.id)}
              />
            </Drop>
          ))
        : null}
    </React.Suspense>
  );
};

export default connect(
  (state) => {
    return {
      selected: state.dictionary.selected,
    };
  },
  {
    setSelectedCategories,
    setSelected,
  }
)(Trashes);
