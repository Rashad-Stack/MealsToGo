import React, { useContext, useEffect, useState } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

import { LocationContext } from "../mock/location.context";

const SearchContainer = styled.View`
  padding: ${({ theme }) => theme.space[3]};
`;

const Search = () => {
  const { keyWord, onSearch } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyWord);

  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search for location"
        value={searchKeyword}
        onSubmitEditing={() => onSearch(searchKeyword)}
        onChangeText={(text) => setSearchKeyword(text)}
      />
    </SearchContainer>
  );
};

export default Search;
