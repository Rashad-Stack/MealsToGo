import React from "react";
import styled, { useTheme } from "styled-components/native";

const defaultTextStyles = (theme) => `
font-family: ${theme.fonts.body};
font-weight:${theme.fontWeights.regular};
color:${theme.colors.text.primary};
flex-wrap:wrap;
margin-top:0;
margin-bottom:0;
`;

const body = (theme) => `
font-size: ${theme.fontSizes.body};
`;

const label = (theme) => `
font-family: ${theme.fonts.heading};
font-size: ${theme.fontSizes.body};
font-weight: ${theme.fontWeights.medium};
`;

const caption = (theme) => `
font-size: ${theme.fontSizes.caption};
font-weight: ${theme.fontWeights.bold};
`;

const error = (theme) => `
color: ${theme.colors.text.error};
`;

const hint = (theme) => `
color: ${theme.colors.text.primary};
font-size: ${theme.fontSizes.body}`;

const variants = {
  body,
  label,
  caption,
  error,
  hint,
};
const getVariant = (variant, theme) => {
  const variantType = variant
    ? variants[variant](theme)
    : defaultTextStyles(theme);
  return variantType;
};

const VariantText = styled.Text`
${({ variant }) => variant})}
`;
const Text = ({ children, variant }) => {
  const theme = useTheme();
  const variantType = getVariant(variant, theme);
  return <VariantText variant={variantType}>{children}</VariantText>;
};

export default Text;
