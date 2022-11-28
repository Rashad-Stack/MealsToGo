import React, { useContext } from "react";
import { FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { RestaurantInfo } from "../components";
import { RestaurantContext } from "../context/restaurant.context";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
const SearchContainer = styled.View`
  padding: ${({ theme }) => theme.space[3]};
`;
const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const LoadingContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const RestaurantScreen = () => {
  const { restaurant, isLoading, error } = useContext(RestaurantContext);

  console.log(MD2Colors, ":😵 log from restaurant screen line number 20 😵  ");
  return (
    <>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      {isLoading ? (
        <LoadingContainer>
          <ActivityIndicator animating={true} color="red" size="large" />
        </LoadingContainer>
      ) : (
        <RestaurantList
          data={restaurant}
          renderItem={({ item }) => <RestaurantInfo restaurant={item} />}
          keyExtractor={(item) => item.name}
        />
      )}
    </>
  );
};

export default RestaurantScreen;
