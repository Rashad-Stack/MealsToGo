import React, { useContext, useEffect, useState } from "react";
import MapView, { Marker, Callout } from "react-native-maps";
import styled from "styled-components/native";

import { RestaurantContext } from "../context/restaurant.context";
import MapCallOut from "./map-callout.component";

const Map = styled(MapView)`
  width: 100%;
  height: 100%;
`;

const Maps = ({ navigate }) => {
  const { restaurants, location } = useContext(RestaurantContext);

  const [latDelta, setLatDelta] = useState(0);

  const { viewPort, lat, lng } = location;

  useEffect(() => {
    const northEastLat = viewPort.northeast.lat;
    const southWestLat = viewPort.southwest.lat;

    setLatDelta(northEastLat - southWestLat);
  }, [location, viewPort]);

  return (
    <Map
      region={{
        latitude: lat,
        longitude: lng,
        latitudeDelta: latDelta,
        longitudeDelta: 0.02,
      }}
    >
      {restaurants.map((restaurant) => (
        <Marker
          key={restaurant.name}
          title={restaurant.name}
          coordinate={{
            latitude: restaurant.geometry.location.lat,
            longitude: restaurant.geometry.location.lng,
          }}
        >
          <Callout
            onPress={() => navigate("RestaurantDetails", { restaurant })}
          >
            <MapCallOut restaurant={restaurant} />
          </Callout>
        </Marker>
      ))}
    </Map>
  );
};

export default Maps;
