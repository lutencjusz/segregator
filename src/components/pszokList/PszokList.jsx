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
  const counterMax = parseInt(process.env.REACT_APP_COUNTER_MAX, 10) || 3;
  const [counter, setCounter] = useState(counterMax);

  const checkFilter = (e) => {
    let req = e.target.value;
    // console.log(e.target.value);
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
        ? listFilter.filterFound.map((item, i) =>
            i < counter ? (
              <Pszok
                obj={item}
                key={i}
                mapa={item.id === mapId}
                lat={item.lat}
                lng={item.lng}
                onClick={() => {
                  if (item.id !== mapId) {
                    setMapId(item.id);
                  } else {
                    setMapId(0);
                  }
                }}
              />
            ) : i === counter ? (
              <button
                className="button_w odstep"
                onClick={() => setCounter(counter + counterMax)}
                key={i}
              >
                więcej...
              </button>
            ) : null
          )
        : null}
    </SuspenseErrorBoundary>
  );
};

export default PszokList;
