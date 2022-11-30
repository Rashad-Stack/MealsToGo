import React from "react";

import { MapSearch, Maps } from "../components";

const MapViewScreen = ({ navigation }) => {
  return (
    <>
      <MapSearch />
      <Maps {...navigation} />
    </>
  );
};

export default MapViewScreen;
