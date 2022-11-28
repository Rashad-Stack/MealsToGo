import { Lato_400Regular, useFonts as useLato } from "@expo-google-fonts/lato";
import {
  Oswald_400Regular,
  useFonts as useOswald,
} from "@expo-google-fonts/oswald";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components";
import Ionicons from "react-native-vector-icons/Ionicons";

import RestaurantScreen from "./src/screens/restaurant.screen";
import { theme } from "./src/theme";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";
import { SafeArea } from "./src/utils";
import { RestaurantContextProvider } from "./src/context/restaurant.context";

const Settings = () => <Text>Settings Screen</Text>;
const Map = () => <Text>Map Screen</Text>;

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

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  const Tab = createBottomTabNavigator();

  return (
    <ThemeProvider theme={theme}>
      <RestaurantContextProvider>
        <SafeArea>
          <NavigationContainer>
            <Tab.Navigator screenOptions={iconPicker}>
              <Tab.Screen name="Restaurant" component={RestaurantScreen} />
              <Tab.Screen name="Settings" component={Settings} />
              <Tab.Screen name="Map" component={Map} />
            </Tab.Navigator>
          </NavigationContainer>
        </SafeArea>
      </RestaurantContextProvider>
      <ExpoStatusBar style="auto" />
    </ThemeProvider>
  );
}
