import { ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import styled from "styled-components/native";

import CompactREstaurantInfo from "./compact-restaurant-info.component";
import { Spacer, Text } from "../utils";

const FavoritesWrapper = styled.View`
  padding: 10px;
`;
const CardWrapper = styled.View`
  flex-direction: row;
  flex: 1;
`;

const FavoriteBar = ({ restaurants, onNavigate }) => {
  if (!restaurants.length) {
    return;
  }

  return (
    <FavoritesWrapper>
      <Spacer position="left" size="large">
        <Text variant="caption">Favorites</Text>
      </Spacer>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <CardWrapper>
          {restaurants.map((restaurant) => (
            <Spacer key={restaurant.name} position="left" size="medium">
              <TouchableOpacity
                onPress={() =>
                  onNavigate.navigate("RestaurantDetails", { restaurant })
                }
              >
                <CompactREstaurantInfo restaurant={restaurant} />
              </TouchableOpacity>
            </Spacer>
          ))}
        </CardWrapper>
      </ScrollView>
    </FavoritesWrapper>
  );
};

export default FavoriteBar;
