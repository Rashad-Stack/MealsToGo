import React, { useContext } from "react";
import { FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";
import { RestaurantInfo } from "../components";
import { RestaurantContext } from "../context/restaurant.context";

const SearchContainer = styled.View`
  padding: ${({ theme }) => theme.space[3]};
`;
const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const RestaurantScreen = () => {
  const restaurantContext = useContext(RestaurantContext);

  console.log(restaurantContext.restaurant);

  return (
    <>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <RestaurantList
        data={restaurantContext.restaurant}
        renderItem={() => <RestaurantInfo />}
        keyExtractor={(item) => item.name}
      />
    </>
  );
};

export default RestaurantScreen;
