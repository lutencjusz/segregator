import React, { Fragment }from "react";

const ButtonNew = ({ category, size = 100, children, onClick }) => {
  return (
    <button className="button_w" onClick={onClick} key={category.id}>
      {!children ? (
        <img
          border="0"
          // className="odstep"
          alt={category.name}
          src={category.image}
          width={size}
          height={size}
        />
      ) : (
        <Fragment>{children}</Fragment>
      )}
    </button>
  );
};

export default ButtonNew;
