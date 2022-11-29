import React, { useContext } from "react";
import { FlatList } from "react-native";
import styled from "styled-components/native";
import { ActivityIndicator, Colors } from "react-native-paper";

import { RestaurantInfo, Search } from "../components";
import { RestaurantContext } from "../context/restaurant.context";

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

const ErrorMassage = styled.Text`
color: ${({ theme }) => theme.colors.text.error}
font-size:${({ theme }) => theme.fontSizes.title}
font-weight: ${({ theme }) => theme.fontWeights.medium}
`;

const RestaurantScreen = () => {
  const { restaurant, isLoading, error } = useContext(RestaurantContext);

  return (
    <>
      <Search />
      {isLoading ? (
        <LoadingContainer>
          {isLoading && (
            <ActivityIndicator
              animating={true}
              color={Colors.orange600}
              size="large"
            />
          )}
          {/* {error && <ErrorMassage>Something Went Wrong</ErrorMassage>} */}
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
