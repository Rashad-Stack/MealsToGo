import React from "react";
import styled from "styled-components/native";
import { WebView } from "react-native-webview";
import { Platform } from "react-native";

import { Text } from "../utils";

const CompactImage = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const CompactWebView = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const Item = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;
const isAndroid = Platform.OS === "android";

const CompactREstaurantInfo = ({ restaurant, isMap }) => {
  const CoverImage = isAndroid && isMap ? CompactWebView : CompactImage;

  return (
    <Item>
      <CoverImage source={{ uri: restaurant.photos[0] }} />

      <Text variant="caption" numberOfLines={3}>
        {restaurant.name}
      </Text>
    </Item>
  );
};

export default CompactREstaurantInfo;
