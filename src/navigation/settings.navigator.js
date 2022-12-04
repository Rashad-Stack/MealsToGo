import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import { Settings, Favorites } from "../screens";

const SettingNavigator = () => {
  const SettingStack = createStackNavigator();

  return (
    <SettingStack.Navigator
      screenOptions={{
        headerShown: true,
        ...TransitionPresets.RevealFromBottomAndroid,
      }}
    >
      <SettingStack.Screen name="Setting" component={Settings} />
      <SettingStack.Screen name="Favorites" component={Favorites} />
    </SettingStack.Navigator>
  );
};

export default SettingNavigator;
