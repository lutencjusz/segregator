import React from "react";
import API from "data/fetch";
import { useQuery } from "react-query";
import { SuspenseErrorBoundary } from "components";
import Pszok from "./Pszok.jsx";


const PszokList = () => {

  const { data: pszok } = useQuery(
    ["pszok", { cache: true }],
    API.dictionary.fetchAll
  );

  return (
    <SuspenseErrorBoundary>
      {pszok ? pszok.map((item) => <Pszok obj={item} key={item.id}/>) : null}
    </SuspenseErrorBoundary>
  );
};

export default PszokList;
