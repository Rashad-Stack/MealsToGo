import React from "react";
import styled from "styled-components/native";
import { Button } from "react-native-paper";

import { Spacer } from "../utils";
import { colors } from "../theme/colors";

const Account = ({ navigation }) => {
  return (
    <AccountBackgroundImage>
      <AccountOverlay />
      <Title>Meals To Go</Title>
      <AccountContainer>
        <Spacer position="bottom" size="large">
          <AuthButton
            icon="lock-open-outline"
            mode="contained"
            onPress={() => navigation.navigate("Login")}
          >
            Login
          </AuthButton>
        </Spacer>
        <AuthButton
          icon="lock-open-outline"
          mode="contained"
          onPress={() => navigation.navigate("Register")}
        >
          Register
        </AuthButton>
      </AccountContainer>
    </AccountBackgroundImage>
  );
};

export default Account;

const AccountBackgroundImage = styled.ImageBackground.attrs({
  source: require("../../assets/home_bg.jpg"),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const AccountContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.5);
  padding: ${({ theme }) => theme.space[3]};
`;

const AccountOverlay = styled.View`
  background-color: rgba(255, 255, 255, 0.3);
  position: absolute;
  width: 100%;
  height: 100%;
`;

const AuthButton = styled(Button).attrs({
  color: colors.brand.primary,
})``;

const Title = styled.Text`
  font-size: 25px;
  font-weight: bold;
`;
