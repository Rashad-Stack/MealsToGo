import React, { useContext } from "react";
import { FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
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
  const { restaurant, isLoading, error } = useContext(RestaurantContext);

  console.log(error, ":😵 log from restaurant screen line number 20 😵  ");
  return (
    <>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <RestaurantList
        data={restaurant}
        renderItem={({ item }) => <RestaurantInfo restaurant={item} />}
        keyExtractor={(item) => item.name}
      />
    </>
  );
};

export default RestaurantScreen;
