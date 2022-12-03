import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import RestaurantNavigator from "./restaurant.navigator";
import { MapViewScreen, Settings } from "../screens";
import {
  RestaurantContextProvider,
  FavoritesContextProvider,
} from "../context";

const iconList = {
  Restaurant: "md-restaurant",
  Settings: "md-settings",
  Map: "md-map",
};

const iconPicker = ({ route }) => {
  const icon = iconList[route.name];
  return {
    tabBarIcon: ({ color, size }) => (
      <Ionicons name={icon} size={size} color={color} />
    ),
    tabBarActiveTintColor: "tomato",
    tabBarInactiveTintColor: "gray",
    headerShown: false,
  };
};

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <FavoritesContextProvider>
      <RestaurantContextProvider>
        <Tab.Navigator screenOptions={iconPicker}>
          <Tab.Screen name="Restaurant" component={RestaurantNavigator} />
          <Tab.Screen name="Map" component={MapViewScreen} />
          <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
      </RestaurantContextProvider>
    </FavoritesContextProvider>
  );
};

export default TabNavigator;
