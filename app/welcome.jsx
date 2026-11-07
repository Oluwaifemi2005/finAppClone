
import { View, Pressable, StatusBar } from "react-native";
import Svg, { Path, Rect } from "react-native-svg";
import { useRouter } from "expo-router";

import Screen from "../components/Screen";
import AppText from "../components/AppText";
import { COLORS } from "../constants/theme";

function FinWiseLogo() {
  return (
    <Svg width={110} height={110} viewBox="0 0 100 100" fill="none">
      <Rect
        x="12" y="62" width="14" height="26" rx="4"
        stroke={COLORS.green} strokeWidth="6"
      />
      <Rect
        x="37" y="48" width="14" height="40" rx="4"
        stroke={COLORS.green} strokeWidth="6"
      />
      <Rect
        x="62" y="32" width="14" height="56" rx="4"
        stroke={COLORS.green} strokeWidth="6"
      />
      <Path
        d="M5 60 L36 34 L46 44 L70 18"
        stroke={COLORS.green}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M58 18 H72 V32"
        stroke={COLORS.green}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function ActionButton({ title, backgroundColor, textColor, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={{
        width: "100%",
        backgroundColor,
        paddingVertical: 16,
        borderRadius: 40,
        alignItems: "center",
      }}
    >
      <AppText weight="bold" size={17} color={textColor}>
        {title}
      </AppText>
    </Pressable>
  );
}

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <Screen style={{ backgroundColor: COLORS.lightGreen }}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={COLORS.lightGreen}
      />

      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 32,
        }}
      >
        {/* Branding */}
        <View
          style={{
            alignItems: "center",
            marginBottom: 64,
          }}
        >
          <FinWiseLogo />

          <AppText
            weight="bold"
            size={36}
            color={COLORS.green}
            style={{ marginTop: 12 }}
          >
            FinWise
          </AppText>
        </View>

        {/* Actions */}
        <View style={{ width: "100%", gap: 16 }}>
          <ActionButton
            title="Log In"
            backgroundColor={COLORS.green}
            textColor={COLORS.darkGreen}
            onPress={() => router.push("/login")}
          />

          <ActionButton
            title="Sign Up"
            backgroundColor={COLORS.secondary}
            textColor={COLORS.darkGreen}
            onPress={() => router.push("/signup")}
          />

          <Pressable
            onPress={() => router.push("/forgot-password")}
            style={{ alignItems: "center", paddingTop: 4 }}
          >
            <AppText
              weight="bold"
              size={14}
              color={COLORS.darkGreen}
            >
              Forgot Password?
            </AppText>
          </Pressable>
        </View>
      </View>
    </Screen>
  );
}
