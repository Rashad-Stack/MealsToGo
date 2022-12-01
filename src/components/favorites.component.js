import { TouchableOpacity } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import styled from "styled-components";

import { FavoritesContext } from "../context";

const FavoriteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 25px;
  right: 25px;
  z-index: 9;
`;

const Favorites = ({ restaurant }) => {
  const { favorites, add, remove } = useContext(FavoritesContext);
  const [isFavorites, setIsFavorites] = useState([]);

  useEffect(() => {
    const isFavorite = favorites.find(
      (favorite) => favorite.placeId === restaurant.placeId
    );
    setIsFavorites(isFavorite);
  }, [favorites, restaurant.placeId]);

  return (
    <FavoriteButton
      onPress={() => {
        isFavorites ? remove(restaurant) : add(restaurant);
      }}
    >
      <AntDesign
        name={isFavorites ? "heart" : "hearto"}
        size={24}
        color={isFavorites ? "red" : "white"}
      />
    </FavoriteButton>
  );
};

export default Favorites;
