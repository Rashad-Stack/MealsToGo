import React, { useContext, useEffect, useState } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

import { LocationContext } from "../mock/location.context";

const SearchContainer = styled.View`
  padding: ${({ theme }) => theme.space[3]};
  position: absolute;
  z-index: 999;
  width: 100%;
`;

const Search = () => {
  const { keyWord, onSearch } = useContext(LocationContext);
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
        icon="map"
      />
    </SearchContainer>
  );
};

export default Search;
