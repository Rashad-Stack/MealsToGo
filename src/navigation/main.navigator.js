import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";

import TabNavigator from "./tab.navigator";
import { AuthContext } from "../context";
import AccountNavigator from "./account.navigator";

const MainNavigator = () => {
  const { users } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {users ? <TabNavigator /> : <AccountNavigator />}
    </NavigationContainer>
  );
};

export default MainNavigator;
