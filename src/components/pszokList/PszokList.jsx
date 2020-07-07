import React, { useState } from "react";
import API from "data/fetch";
import { useQuery } from "react-query";
import { SuspenseErrorBoundary } from "components";
import Pszok from "./Pszok.jsx";

const PszokList = () => {
  const { data: pszok } = useQuery(
    ["pszok", { cache: true }],
    API.dictionary.fetchAll
  );

  const [listFilter, addListFilter] = useState({ filterFound: pszok });
  const [mapId, setMapId] = useState(0);

  const checkFilter = (e) => {
    let req = e.target.value;
    console.log(e.target.value);
    addListFilter({
      filterFound: pszok.filter(
        (p) =>
          p.street.toLowerCase().includes(req.toLowerCase()) ||
          p.name.toLowerCase().includes(req.toLowerCase())
      ),
    });
  };

  return (
    <SuspenseErrorBoundary>
      <input
        type="text"
        className="finder"
        onChange={checkFilter}
        placeholder="Filtrowanie PSZOK po mieście lub ulicy"
      />
      {listFilter.filterFound
        ? listFilter.filterFound.map((item) => (
            <Pszok
              obj={item}
              key={item.id}
              mapa={item.id === mapId}
              lat={item.lat}
              lng={item.lng} 
              onClick={()=>setMapId(item.id)}
            />
          ))
        : null}
    </SuspenseErrorBoundary>
  );
};

export default PszokList;
