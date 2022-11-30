import { Lato_400Regular, useFonts as useLato } from "@expo-google-fonts/lato";
import {
  Oswald_400Regular,
  useFonts as useOswald,
} from "@expo-google-fonts/oswald";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components";

import { theme } from "./src/theme";
import { SafeArea } from "./src/utils";
import { RestaurantContextProvider } from "./src/context/restaurant.context";
import { LocationContextProvider } from "./src/mock/location.context";
import { Navigator } from "./src/navigation";

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

  return (
    <ThemeProvider theme={theme}>
      <LocationContextProvider>
        <RestaurantContextProvider>
          <SafeArea>
            <Navigator />
          </SafeArea>
        </RestaurantContextProvider>
      </LocationContextProvider>
      <ExpoStatusBar style="auto" />
    </ThemeProvider>
  );
}
