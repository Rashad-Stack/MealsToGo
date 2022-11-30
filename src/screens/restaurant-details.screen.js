import { View, ScrollView } from "react-native";
import React, { useState } from "react";
import { List } from "react-native-paper";
import styled from "styled-components";

import { RestaurantDetailCard } from "../components";

const DetailContainer = styled.View`
  flex: 1;
`;

const Scrolling = styled(ScrollView)`
  flex: 1;
`;

const Icon = (name, prop) => <List.Icon {...prop} icon={name} />;

const RestaurantDetails = ({ route }) => {
  const { restaurant } = route.params;

  return (
    <DetailContainer>
      <RestaurantDetailCard restaurant={restaurant} />

      <Scrolling>
        <List.Accordion
          title="Breakfast"
          left={(props) => Icon("bread-slice", props)}
        >
          <List.Item title="Eggs Benedict" />
          <List.Item title="Classic Breakfast" />
        </List.Accordion>

        <List.Accordion
          title="Lunch"
          left={(props) => Icon("hamburger", props)}
        >
          <List.Item title="Burger w/ Fries" />
          <List.Item title="Steak Sandwich" />
          <List.Item title="Mushroom Soup" />
        </List.Accordion>

        <List.Accordion title="Dinner" left={(props) => Icon("food", props)}>
          <List.Item title="Spaghetti Bolognese" />
          <List.Item title="Veal Cutlet with Chicken Mushroom Rotini" />
          <List.Item title="Steak Frites" />
        </List.Accordion>

        <List.Accordion title="Drinks" left={(props) => Icon("cup", props)}>
          <List.Item title="Coffee" />
          <List.Item title="Tea" />
          <List.Item title="Modelo" />
          <List.Item title="Coke" />
          <List.Item title="Fanta" />
        </List.Accordion>
      </Scrolling>
    </DetailContainer>
  );
};

export default RestaurantDetails;
