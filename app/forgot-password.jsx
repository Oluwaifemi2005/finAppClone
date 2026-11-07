
import { useState } from "react";
import {
  View,
  TextInput,
  Pressable,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
} from "react-native";
import { useRouter } from "expo-router";
import Svg, { Path, Circle } from "react-native-svg";

import Screen from "../components/Screen";
import AppText from "../components/AppText";
import { COLORS } from "../constants/theme";

function FacebookIcon() {
  return (
    <Svg width={40} height={40} viewBox="0 0 40 40" fill="none">
      <Circle cx={20} cy={20} r={18} stroke={COLORS.darkGreen} strokeWidth={1.8} />
      <Path
        d="M22 15h3v-4.5h-3.6c-3.6 0-4.4 2.2-4.4 4.5V18h-3v4h3v9h4v-9h3.5l.5-4H20v-2.2c0-1.1.5-1.8 2-1.8z"
        stroke={COLORS.darkGreen}
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function GoogleIcon() {
  return (
    <Svg width={40} height={40} viewBox="0 0 40 40" fill="none">
      <Circle cx={20} cy={20} r={18} stroke={COLORS.darkGreen} strokeWidth={1.8} />
      <Path
        d="M28 20.2c0-.7-.06-1.4-.18-2.02H20v3.83h4.48c-.2 1.05-.78 1.94-1.66 2.54v2.1h2.68c1.57-1.45 2.5-3.58 2.5-6.45z"
        stroke={COLORS.darkGreen}
        strokeWidth={1.6}
      />
      <Path
        d="M20 28.5c2.3 0 4.22-.76 5.63-2.06l-2.68-2.1c-.76.51-1.74.82-2.95.82-2.27 0-4.2-1.53-4.89-3.6H12.3v2.16A8.5 8.5 0 0020 28.5z"
        stroke={COLORS.darkGreen}
        strokeWidth={1.6}
      />
      <Path
        d="M15.11 21.56a5.1 5.1 0 010-3.12V16.28H12.3a8.5 8.5 0 000 7.44l2.81-2.16z"
        stroke={COLORS.darkGreen}
        strokeWidth={1.6}
      />
      <Path
        d="M20 14.84c1.25 0 2.37.43 3.25 1.28l2.44-2.44C24.21 12.33 22.29 11.5 20 11.5a8.5 8.5 0 00-7.7 5.28l2.81 2.16c.69-2.07 2.62-3.6 4.89-3.6z"
        stroke={COLORS.darkGreen}
        strokeWidth={1.6}
      />
    </Svg>
  );
}

function ActionButton({ title, backgroundColor, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={{
        width: 192,
        backgroundColor,
        paddingVertical: 14,
        borderRadius: 40,
        alignItems: "center",
      }}
    >
      <AppText weight="bold" size={18} color={COLORS.darkGreen}>
        {title}
      </AppText>
    </Pressable>
  );
}

export default function ForgotPasswordScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  return (
    <Screen style={{ backgroundColor: COLORS.green }}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.green} />

      <View
        style={{
          alignItems: "center",
          paddingTop: 32,
          paddingBottom: 40,
        }}
      >
        <AppText weight="bold" size={30}>
          Forgot Password
        </AppText>
      </View>

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: COLORS.lightGreen,
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,
            paddingHorizontal: 32,
            paddingTop: 40,
          }}
        >
          <ScrollView
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={{
              flexGrow: 1,
              paddingBottom: 24,
            }}
          >
            {/* Title and Description */}
            <View style={{ marginBottom: 32 }}>
              <AppText
                weight="bold"
                size={24}
                style={{ marginBottom: 8 }}
              >
                Reset Password?
              </AppText>

              <AppText color="#5D6B6B" size={12}>
                Enter your registered email address to receive instructions
                and proceed with resetting your account password.
              </AppText>
            </View>

            {/* Email Input */}
            <View style={{ marginBottom: 32 }}>
              <AppText
                weight="bold"
                size={14}
                style={{ marginBottom: 8, marginLeft: 8 }}
              >
                Enter Email Address
              </AppText>

              <View
                style={{
                  backgroundColor: COLORS.secondary,
                  borderRadius: 24,
                  paddingHorizontal: 20,
                  paddingVertical: 16,
                }}
              >
                <TextInput
                  value={email}
                  onChangeText={setEmail}
                  placeholder="example@example.com"
                  placeholderTextColor="#7D8A8A"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  style={{
                    color: COLORS.darkGreen,
                    fontSize: 16,
                    padding: 0,
                  }}
                />
              </View>
            </View>

            {/* Next Step */}
            <View style={{ alignItems: "center", marginBottom: 64 }}>
              <ActionButton
                title="Next Step"
                backgroundColor={COLORS.green}
              />
            </View>

            {/* Sign Up */}
            <View style={{ alignItems: "center", marginBottom: 24 }}>
              <ActionButton
                title="Sign Up"
                backgroundColor={COLORS.secondary}
                onPress={() => router.push("/signup")}
              />
            </View>

            {/* Social Authentication */}
            <View style={{ alignItems: "center", marginBottom: 32 }}>
              <AppText
                color="#5D6B6B"
                size={12}
                weight="medium"
                style={{ marginBottom: 16 }}
              >
                or sign up with
              </AppText>

              <View style={{ flexDirection: "row", gap: 24 }}>
                <FacebookIcon />
                <GoogleIcon />
              </View>
            </View>

            {/* Bottom Redirect */}
            <View
              style={{
                marginTop: "auto",
                alignItems: "center",
                paddingVertical: 16,
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <AppText size={12} weight="medium">
                Don’t have an account?{" "}
              </AppText>

              <Pressable onPress={() => router.push("/signup")}>
                <AppText color={COLORS.blue} weight="bold" size={12}>
                  Sign Up
                </AppText>
              </Pressable>
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </Screen>
  );
}
