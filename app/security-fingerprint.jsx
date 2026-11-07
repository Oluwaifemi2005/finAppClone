
import {
  View,
  Pressable,
  StatusBar,
} from "react-native";
import Svg, { Circle, Path } from "react-native-svg";

import Screen from "../components/Screen";
import AppText from "../components/AppText";
import { COLORS } from "../constants/theme";

function FingerprintBadge() {
  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <Svg width={180} height={180} viewBox="0 0 160 160" fill="none">
        <Circle cx={80} cy={80} r={75} fill={COLORS.green} />

        <Path
          d="M80 48C70 48 55 56 55 75C55 94 65 106 72 110"
          stroke={COLORS.white}
          strokeWidth={3.5}
          strokeLinecap="round"
        />
        <Path
          d="M89 50C97 53 103 62 103 72C103 82 99 90 94 96C88 104 88 110 93 113C97 116 102 113 104 109C108 103 111 92 111 75C111 60 101 44 80 44C66 44 47 54 47 77C47 96 56 112 66 120"
          stroke={COLORS.white}
          strokeWidth={3.5}
          strokeLinecap="round"
        />
        <Path
          d="M62 76C62 65 70 58 79 58C88 58 95 64 95 73C95 85 86 94 81 99C76 104 77 110 80 114C83 118 89 119 92 116"
          stroke={COLORS.white}
          strokeWidth={3.5}
          strokeLinecap="round"
        />
        <Path
          d="M71 78C71 73 75 68 80 68C85 68 88 72 88 77C88 84 82 90 77 95C72 100 70 106 73 110"
          stroke={COLORS.white}
          strokeWidth={3.5}
          strokeLinecap="round"
        />
      </Svg>
    </View>
  );
}

export default function SecurityFingerprintScreen() {
  return (
    <Screen style={{ backgroundColor: COLORS.green }}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.green} />

      {/* Header */}
      <View
        style={{
          alignItems: "center",
          paddingTop: 32,
          paddingBottom: 40,
        }}
      >
        <AppText weight="bold" size={30}>
          Security Fingerprint
        </AppText>
      </View>

      {/* Main Card */}
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.lightGreen,
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          paddingHorizontal: 32,
          paddingTop: 64,
          paddingBottom: 48,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Fingerprint Content */}
        <View style={{ alignItems: "center", width: "100%" }}>
          <FingerprintBadge />

          <AppText
            weight="bold"
            size={24}
            textAlign="center"
            style={{ marginTop: 48 }}
          >
            Use Fingerprint To Access
          </AppText>

          <AppText
            color="#5D6B6B"
            size={12}
            textAlign="center"
            style={{
              marginTop: 16,
              paddingHorizontal: 24,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
          </AppText>
        </View>

        {/* Actions */}
        <View style={{ width: "100%", alignItems: "center", marginBottom: 8 }}>
          <Pressable
            onPress={() => console.log("Use Touch ID pressed")}
            style={{
              width: "100%",
              backgroundColor: COLORS.secondary,
              paddingVertical: 16,
              borderRadius: 40,
              alignItems: "center",
              marginBottom: 24,
            }}
          >
            <AppText weight="bold" size={18}>
              Use Touch Id
            </AppText>
          </Pressable>

          <AppText color="#5D6B6B" size={12}>
            ¿Or prefer use pin code?
          </AppText>
        </View>
      </View>
    </Screen>
  );
}
