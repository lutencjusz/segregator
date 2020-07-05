import React, { Fragment } from "react";
import { connect } from "react-redux";
import Trashes from "../trashes";
import { SuspenseErrorBoundary } from "components";
import API from "data/fetch";
import { useQuery } from "react-query";
import { useTranslation } from "react-i18next";

const DescCategories = ({ selectedCategories }) => {
  const { t } = useTranslation();

  const { data: categories } = useQuery(
    ["categories", { cache: true }],
    API.dictionary.fetchAll
  );

  const obj = categories.find((category) => category.id === selectedCategories);

  return (
    <SuspenseErrorBoundary>
      {categories ? (
        <Fragment>
          <Trashes />
            <div className="media media_category">
              <img src={obj.image} className="mr-3" alt={obj.name} />
              <div className="media-body">
                <h4 className="mt-0">{obj.name}</h4>
                <h6>{obj.remember}</h6>
                {obj.name === "PSZOK" ? (
                  <a href="/listaPunktow" className="naglowek_a">
                    <h6>
                      <div className="tytul_a">{t("lista punktów")}</div>
                    </h6>
                  </a>
                ) : null}
              </div>
            </div>
            <div className="media_appendix">
              <h5>{t("Tak")}:</h5>
              <h6>{obj.descYes}</h6>
            </div>
            <div className="media_appendix">
              <h5>{t("Nie")}:</h5>
              <h6>{obj.descNo}</h6>
            </div>
            <h6><br/></h6>
        </Fragment>
      ) : null}
    </SuspenseErrorBoundary>
  );
};

export default connect((state) => {
  return {
    selectedCategories: state.dictionary.selectedCategories,
  };
})(DescCategories);
