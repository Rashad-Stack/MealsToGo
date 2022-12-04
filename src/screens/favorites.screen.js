import React, { useContext } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

import { FavoritesContext } from "../context";
import { RestaurantDetailCard } from "../components";
import { Text } from "../utils";

const Favorites = ({ navigation }) => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <>
      {favorites.length ? (
        <RestaurantList
          data={favorites}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetails", { restaurant: item })
              }
            >
              <RestaurantDetailCard restaurant={item} />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.name}
        />
      ) : (
        <FavoriteMassageContainer>
          <Text variant="body">You do not have favorite</Text>
        </FavoriteMassageContainer>
      )}
    </>
  );
};

export default Favorites;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const FavoriteMassageContainer = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;
