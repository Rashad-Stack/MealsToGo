import React, { useContext, useState, useEffect } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

import { RestaurantContext } from "../context/restaurant.context";

const SearchContainer = styled.View`
  padding: ${({ theme }) => theme.space[3]};
`;

const Search = ({ isFavoriteToggle, onFavoriteToggle }) => {
  const { keyWord, onSearch } = useContext(RestaurantContext);
  const [searchKeyword, setSearchKeyword] = useState(keyWord);

  useEffect(() => {
    setSearchKeyword(keyWord);
  }, [keyWord]);

  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search for location"
        value={searchKeyword}
        onSubmitEditing={() => onSearch(searchKeyword)}
        onChangeText={(text) => setSearchKeyword(text)}
        icon={isFavoriteToggle ? "heart" : "heart-outline"}
        onIconPress={onFavoriteToggle}
      />
    </SearchContainer>
  );
};

export default Search;
