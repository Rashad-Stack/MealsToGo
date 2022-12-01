import { TouchableOpacity } from "react-native";
import React, { useContext } from "react";
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
  console.log(
    "🚀 ~ file: favorites.component.js:17 ~ Favorites ~ favorites",
    favorites.length
  );

  const isFavorite = favorites.find(
    (favorite) => favorite.placeId === restaurant.placeId
  );

  return (
    <FavoriteButton
      onPress={() => {
        isFavorite ? remove(restaurant) : add(restaurant);
      }}
    >
      <AntDesign
        name={isFavorite ? "heart" : "hearto"}
        size={24}
        color={isFavorite ? "red" : "white"}
      />
    </FavoriteButton>
  );
};

export default Favorites;
