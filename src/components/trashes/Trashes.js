import React from 'react';
import { connect } from 'react-redux';
import {Drop} from '../dragDrop';

const Trashes = ({ 
  categories, selected
 }) => {

  const getSelected = () => {
    console.log(selected);
  }
  
  return <div>
      {categories.map((category) => (
        <Drop key={category.id} onDrop={(id) => getSelected()}>
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
