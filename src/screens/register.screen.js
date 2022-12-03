import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components/native";
import { Button, TextInput } from "react-native-paper";
import { ActivityIndicator, Colors } from "react-native-paper";

import { colors } from "../theme/colors";
import { Spacer, Text } from "../utils";
import { AuthContext } from "../context";

const Register = () => {
  const { register, isLoading, setError, error } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    setError(null);
  }, [setError]);

  return (
    <AccountBackgroundImage>
      <AccountOverlay />
      <Title>Meals To Go</Title>
      <AccountContainer>
        <Spacer position="bottom" size="large">
          <Input
            mode="flat"
            label="E-mail"
            placeholder="Enter Email"
            textContentType="emailAddress"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
        </Spacer>
        <Spacer position="bottom" size="large">
          <Input
            mode="flat"
            placeholder="Enter Password"
            label="Password"
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
        </Spacer>
        <Spacer position="bottom" size="large">
          <Input
            mode="flat"
            placeholder="Confirm Password"
            label="Confirm Password"
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(text) => setConfirmPassword(text)}
            value={confirmPassword}
          />
        </Spacer>
        {error && (
          <ErrorContainer>
            <Spacer position="bottom" size="large">
              <Text variant="error">{error.errorMessage}</Text>
            </Spacer>
          </ErrorContainer>
        )}

        {isLoading ? (
          <LoadingContainer>
            <ActivityIndicator
              animating={true}
              color={Colors.white}
              size="small"
            />
          </LoadingContainer>
        ) : (
          <AuthButton
            mode="contained"
            onPress={() => register(email, password, confirmPassword)}
          >
            Register
          </AuthButton>
        )}
      </AccountContainer>
    </AccountBackgroundImage>
  );
};

export default Register;

const AccountBackgroundImage = styled.ImageBackground.attrs({
  source: require("../../assets/home_bg.jpg"),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const AccountOverlay = styled.View`
  background-color: rgba(255, 255, 255, 0.3);
  position: absolute;
  width: 100%;
  height: 100%;
`;
const AccountContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.5);
  padding: ${({ theme }) => theme.space[3]};
`;

const Title = styled.Text`
  font-size: 25px;
  font-weight: bold;
`;

const AuthButton = styled(Button).attrs({
  color: colors.brand.primary,
})``;

const Input = styled(TextInput)`
  width: 300px;
`;

const LoadingContainer = styled.View`
  width: 300px;
  background-color: ${colors.brand.primary};
  padding-top: 6.5px;
  padding-bottom: 6.5px;
  align-items: center;
  align-self: center;
`;

const ErrorContainer = styled.View`
  width: 300px;
  align-items: center;
  align-self: center;
`;
