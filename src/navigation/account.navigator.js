import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import { Account, Login, Register } from "../screens";

const AccountNavigator = () => {
  const AccountStack = createStackNavigator();
  return (
    <AccountStack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.RevealFromBottomAndroid,
      }}
    >
      <AccountStack.Screen name="Account" component={Account} />
      <AccountStack.Screen name="Login" component={Login} />
      <AccountStack.Screen name="Register" component={Register} />
    </AccountStack.Navigator>
  );
};

export default AccountNavigator;
