import React, { useContext } from "react";
import { List, Avatar } from "react-native-paper";
import styled from "styled-components/native";

import { AuthContext } from "../context";
import { Spacer, Text } from "../utils";

const Logout = (props) => <List.Icon {...props} color="black" icon="logout" />;
const favorite = (props) => (
  <List.Icon {...props} color="black" icon="cards-heart" />
);

const Settings = ({ navigation }) => {
  const { logout, users } = useContext(AuthContext);
  return (
    <>
      <AvatarContainer>
        <Avatar.Icon size={150} icon="human" backgroundColor="#2182BD" />
        <Spacer position="top" size="large">
          <Text variant="label">{users.email}</Text>
        </Spacer>
      </AvatarContainer>
      <List.Section>
        <ListItem
          title="Favorite"
          left={favorite}
          description="View your favorites"
          onPress={() => navigation.navigate("Favorites")}
        />
        <ListItem title="Log out" left={Logout} onPress={logout} />
      </List.Section>
    </>
  );
};

export default Settings;

const ListItem = styled(List.Item)`
  padding: ${({ theme }) => theme.space[3]};
`;

const AvatarContainer = styled.View`
  align-items: center;
  padding-top: ${({ theme }) => theme.space[2]};
`;
