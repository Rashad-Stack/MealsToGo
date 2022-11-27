import React from "react";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import styled from "styled-components/native";
import star from "../../assets/star";
import open from "../../assets/open";
import { Spacer, Text } from "../utils";

const RestaurantCard = styled(Card)`
  background-color: ${({ theme }) => theme.colors.bg.primary};
  margin: ${({ theme }) => theme.space[3]};
`;
const RestaurantCardCover = styled(Card.Cover)`
  padding: ${({ theme }) => theme.space[3]};
  background-color: ${({ theme }) => theme.colors.bg.primary};
`;

const Rating = styled.View`
  flex-direction: row;
  padding: ${({ theme }) => theme.space[2]} 0;
`;
const Section = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const SectionEnd = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;

const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    ],
    address = "100 Some Randon street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard>
      <RestaurantCardCover source={{ uri: photos[0] }} />
      <Card.Content>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((x, i) => (
              <SvgXml key={i} xml={star} width={20} height={20} />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="error">Closed Temporarily</Text>
            )}
            <Spacer position="left" size="large">
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>
            <Spacer position="left" size="large">
              <Icon source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Text variant="caption">{address}</Text>
      </Card.Content>
    </RestaurantCard>
  );
};

export default RestaurantInfo;
