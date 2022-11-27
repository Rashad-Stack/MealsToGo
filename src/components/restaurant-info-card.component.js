import styled from "styled-components/native";
import { Card } from "react-native-paper";
export const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;
export const RestaurantCard = styled(Card)`
  background-color: ${({ theme }) => theme.colors.bg.primary};
  margin: ${({ theme }) => theme.space[3]};
`;
export const RestaurantCardCover = styled(Card.Cover)`
  padding: ${({ theme }) => theme.space[3]};
  background-color: ${({ theme }) => theme.colors.bg.primary};
`;

export const Rating = styled.View`
  flex-direction: row;
  padding: ${({ theme }) => theme.space[2]} 0;
`;
export const Section = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const SectionEnd = styled.View`
  flex-direction: row;
  align-items: center;
`;
