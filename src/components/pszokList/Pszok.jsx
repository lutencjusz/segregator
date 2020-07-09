import React, { Fragment } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "80vw",
  height: "40vw",
};


const Pszok = ({ obj, mapa, onClick, lat, lng }) => {
  const [, setMap] = React.useState(null); //nie odczytuję wartości
  const key = process.env.REACT_APP_GOOGLE_MAP_KEY;

  const position = {
    lat,
    lng,
  };

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return (
    <Fragment>
      <div className="media pszok">
        <button onClick={onClick} category={obj}>
          <img src={obj.image} alt={obj.name} />
        </button>

        <div className="media-body">
          <h4 className="mt-0">{obj.name}</h4>
          <h6>{obj.working}</h6>
          <h6>{obj.street}</h6>
          <h6>tel. {obj.phone}</h6>
        </div>
      </div>
      {mapa ? (
        <LoadScript googleMapsApiKey={key}>
          <div className="GoogleMap">
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={position}
              zoom={13}
              // onLoad={onLoad}
              onUnmount={onUnmount}
              disableDefaultUI={true}
            >
              <Marker position={position} name={obj.name} />
            </GoogleMap>
          </div>
        </LoadScript>
      ) : null}
    </Fragment>
  );
};

export default Pszok;

