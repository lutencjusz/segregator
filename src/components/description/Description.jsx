import React, { Fragment } from "react";
import { connect } from "react-redux";
import API from "data/fetch";
import { useQuery } from "react-query";
import { useTranslation } from 'react-i18next';

const Description = ({ selected }) => {

  const { t } = useTranslation();

  const { data: categories } = useQuery(
    "categories",
    API.dictionary.fetchAllCategories
  );

  const obj = categories.find(
    (category) => category.id === selected.categoryId
  );

  return (
    <Fragment>
      <div className="media">
        <img src={obj.image} className="mr-3" alt={obj.name} />
        <div className="media-body">
          <h4 className="mt-0">{selected.name}</h4>
          <h6>{t('należy wrzucać do pojemników na')} {obj.name}</h6>
        </div>
      </div>
      {selected.description ? (
        <div className="media_appendix">
          <h6>{selected.description}</h6>
        </div>
      ) : null}
      <div className="media_appendix">
        <h6>tak jak {obj.descYes}</h6>
      </div>
    </Fragment>
  );
};

export default connect((state) => {
  return {
    selected: state.dictionary.selected,
  };
})(Description);
