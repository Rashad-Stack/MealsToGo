import { View, Text, Button } from "react-native";
import React, { useContext } from "react";

import { AuthContext } from "../context";

const Settings = () => {
  const { logout } = useContext(AuthContext);
  return (
    <View>
      <Text>Setting</Text>
      <Button title="Log out" onPress={() => logout()} />
    </View>
  );
};

export default Settings;
