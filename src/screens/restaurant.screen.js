import React, { useContext, useState } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { ActivityIndicator, Colors } from "react-native-paper";

import { RestaurantDetailCard, Search, FavoriteBar } from "../components";
import { RestaurantContext, FavoritesContext } from "../context";
import { FadeInView } from "../animation";

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

// const ErrorMassage = styled.Text`
// color: ${({ theme }) => theme.colors.text.error}
// font-size:${({ theme }) => theme.fontSizes.title}
// font-weight: ${({ theme }) => theme.fontWeights.medium}
// `;

const RestaurantScreen = ({ navigation }) => {
  const { restaurants, isLoading } = useContext(RestaurantContext);
  const { favorites } = useContext(FavoritesContext);
  const [isToggle, setIsToggle] = useState(false);

  return (
    <>
      <Search
        isFavoriteToggle={isToggle}
        onFavoriteToggle={() => setIsToggle(!isToggle)}
      />
      {isToggle && (
        <FavoriteBar restaurants={favorites} onNavigate={navigation} />
      )}

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
        <FadeInView>
          <RestaurantList
            data={restaurants}
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
        </FadeInView>
      )}
    </>
  );
};

export default RestaurantScreen;
