import { useRouter } from "expo-router";
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
import Svg, { Path, Circle } from "react-native-svg";

import Screen from "../components/Screen";
import AppText from "../components/AppText";
import { COLORS } from "../constants/theme";

function EyeIcon({ isClosed }) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      {isClosed ? (
        <>
          <Path
            d="M3 12C3 12 7 6 12 6C17 6 21 12 21 12"
            stroke={COLORS.darkGreen}
            strokeWidth={2}
            strokeLinecap="round"
          />
          <Path
            d="M6 14L4 17M10 16L9.5 19.5M14 16L14.5 19.5M18 14L20 17"
            stroke={COLORS.darkGreen}
            strokeWidth={2}
            strokeLinecap="round"
          />
        </>
      ) : (
        <>
          <Path
            d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z"
            stroke={COLORS.darkGreen}
            strokeWidth={2}
          />
          <Circle
            cx={12}
            cy={12}
            r={3}
            stroke={COLORS.darkGreen}
            strokeWidth={2}
          />
        </>
      )}
    </Svg>
  );
}

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
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20 28.5c2.3 0 4.22-.76 5.63-2.06l-2.68-2.1c-.76.51-1.74.82-2.95.82-2.27 0-4.2-1.53-4.89-3.6H12.3v2.16A8.5 8.5 0 0020 28.5z"
        stroke={COLORS.darkGreen}
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.11 21.56a5.1 5.1 0 010-3.12V16.28H12.3a8.5 8.5 0 000 7.44l2.81-2.16z"
        stroke={COLORS.darkGreen}
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20 14.84c1.25 0 2.37.43 3.25 1.28l2.44-2.44C24.21 12.33 22.29 11.5 20 11.5a8.5 8.5 0 00-7.7 5.28l2.81 2.16c.69-2.07 2.62-3.6 4.89-3.6z"
        stroke={COLORS.darkGreen}
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function InputField({ label, children }) {
  return (
    <View style={{ marginBottom: 24 }}>
      <AppText weight="bold" size={14} style={{ marginBottom: 8, marginLeft: 8 }}>
        {label}
      </AppText>
      {children}
    </View>
  );
}

function ActionButton({ title, backgroundColor, onPress }) {
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
      <AppText weight="bold" size={18} color={COLORS.darkGreen}>
        {title}
      </AppText>
    </Pressable>
  );
}

export default function LoginScreen() {
    const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secureText, setSecureText] = useState(true);

  return (
    <Screen style={{ backgroundColor: COLORS.green }}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.green} />

      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          paddingTop: 32,
          paddingBottom: 40,
        }}
      >
        <AppText weight="bold" size={30}>
          Welcome
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
            contentContainerStyle={{ flexGrow: 1 }}
          >
            <InputField label="Username Or Email">
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
                  style={{ color: COLORS.darkGreen, fontSize: 16, padding: 0 }}
                />
              </View>
            </InputField>

            <InputField label="Password">
              <View
                style={{
                  backgroundColor: COLORS.secondary,
                  borderRadius: 24,
                  paddingHorizontal: 20,
                  paddingVertical: 14,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <TextInput
                  value={password}
                  onChangeText={setPassword}
                  placeholder="••••••••"
                  placeholderTextColor="#7D8A8A"
                  secureTextEntry={secureText}
                  style={{
                    flex: 1,
                    color: COLORS.darkGreen,
                    fontSize: 16,
                    padding: 0,
                    letterSpacing: 2,
                  }}
                />

                <Pressable
                  onPress={() => setSecureText(!secureText)}
                  hitSlop={10}
                >
                  <EyeIcon isClosed={secureText} />
                </Pressable>
              </View>
            </InputField>

            <View style={{ alignItems: "center", gap: 16, marginTop: 8 }}>
              <ActionButton
                title="Log In"
                backgroundColor={COLORS.green}
                onPress={() => router.replace("/(tabs)")}
              />

              <Pressable
                style={{ paddingVertical: 4 }}
                onPress={() => router.push("/forgot-password")}
              >
                <AppText weight="bold" size={12}>
                  Forgot Password?
                </AppText>
              </Pressable>

                <ActionButton
                title="Sign Up"
                backgroundColor={COLORS.secondary}
                onPress={() => router.push("/signup")}
                />
            </View>

            <View style={{ alignItems: "center", marginTop: 24 }}>
              <Pressable onPress={() => router.push("/security-fingerprint")}>
                <AppText weight="bold" size={14}>
                  Use <AppText color={COLORS.blue} weight="bold">Fingerprint</AppText> To Access
                </AppText>
              </Pressable>
            </View>

            <View style={{ alignItems: "center", marginTop: 32 }}>
              <AppText color="#5D6B6B" size={12} weight="medium" style={{ marginBottom: 16 }}>
                or sign up with
              </AppText>

              <View style={{ flexDirection: "row", gap: 24 }}>
                <Pressable><FacebookIcon /></Pressable>
                <Pressable><GoogleIcon /></Pressable>
              </View>
            </View>

            <View style={{ marginTop: "auto", paddingVertical: 24, alignItems: "center", flexDirection: "row", flexDirection: "row", }}>
              <AppText size={12} weight="medium">
                Don’t have an account?{" "}
                <Pressable onPress={() => router.push("/signup")}>
                    <AppText color={COLORS.blue} weight="bold" size={12}>
                    Sign Up
                    </AppText>
                </Pressable>
              </AppText>
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </Screen>
  );
}
