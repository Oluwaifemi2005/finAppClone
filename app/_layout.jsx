import "../global.css";
import { Stack } from "expo-router";
import { useFonts } from "expo-font";

import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import {
  LeagueSpartan_400Regular,
  LeagueSpartan_500Medium,
} from "@expo-google-fonts/league-spartan";

import { Inter_700Bold } from "@expo-google-fonts/inter";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    LeagueSpartan_400Regular,
    LeagueSpartan_500Medium,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
  <Stack
    screenOptions={{
      headerShown: false,
    }}
  />
);
}