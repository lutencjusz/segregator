import React from 'react';
import { connect } from 'react-redux';
import { Drop } from '../dragDrop';
import Swal from 'sweetalert2';

const Trashes = ({
  categories, selected
}) => {

  const getSelected = (categoryId) => {
    console.log({ selected }, { categoryId });
    if (selected && categoryId !== selected.categoryId) {
      Swal.fire({
        title: `Napisz dlaczego chcesz zmienić kategorię z ${categories[selected.categoryId].name} na ${categories[categoryId].name}?`,
        input: 'text',
        showCancelButton: true,
        cancelButtonText: 'Rezygnuję',
        confirmButtonText: 'Zmień kategorię',
      }).then((result) => {
        console.log({result});
      });
    }

  }

  return <div>
    {categories.map((category) => (
      <Drop key={category.id} onDrop={(id) => getSelected(category.id)}>
        <a key={category.id} href="https://www.w3schools.com">
          <img
            border="0"
            className="odstep"
            alt={category.name}
            src={category.image}
            width="150"
            height="150"
          />
        </a>
      </Drop>
    ))}
  </div>
};



export default connect(state => {
  return {
    categories: state.dictionary.categories,
    selected: state.dictionary.selected,
  }
})(Trashes);
