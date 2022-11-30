import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import RestaurantNavigator from "./restaurant.navigator";
import { MapViewScreen, Settings } from "../screens";

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

const Navigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={iconPicker}>
        <Tab.Screen name="Restaurant" component={RestaurantNavigator} />
        <Tab.Screen name="Map" component={MapViewScreen} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
