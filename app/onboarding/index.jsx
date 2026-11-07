
import { View, Image, StatusBar, Pressable } from "react-native";
import { useRouter } from "expo-router";
import Screen from "../../components/Screen";
import AppText from "../../components/AppText";
import { COLORS } from "../../constants/theme";

export default function OnboardingScreen() {
    const router = useRouter();
  return (
    <Screen style={{ backgroundColor: COLORS.green }}>
      <StatusBar barStyle="dark-content" />

      {/* Welcome heading */}
      <View
        style={{
          alignItems: "center",
          paddingTop: 145,
        }}
      >
        <AppText weight="semiBold" size={29}>
          Welcome To
        </AppText>

        <AppText weight="semiBold" size={29}>
          Expense Manager
        </AppText>
      </View>

      {/* Bottom panel */}
      <View
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: "67%",
          backgroundColor: COLORS.lightGreen,
          borderTopLeftRadius: 70,
          borderTopRightRadius: 70,
          alignItems: "center",
        }}
      >
        {/* Illustration */}
        <View
          style={{
            width: 250,
            height: 250,
            borderRadius: 125,
            backgroundColor: "#DFF7E2",
            marginTop: 115,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={require("../../assets/Component 28.png")}
            style={{
              width: 260,
              height: 260,
            }}
            resizeMode="contain"
          />
        </View>

        {/* Next */}
        <Pressable
        onPress={() => router.replace("/onboarding/second")}
        style={{
            position: "absolute",
            bottom: 145,
        }}
        >
        <AppText weight="semiBold" size={29}>
            Next
        </AppText>
        </Pressable>

        {/* Pagination */}
        <View
          style={{
            position: "absolute",
            bottom: 110,
            flexDirection: "row",
            alignItems: "center",
            gap: 15,
          }}
        >
            <Pressable
            onPress={() => router.replace("/onboarding")}
            style={{
                width: 13,
                height: 13,
                borderRadius: 7,
                backgroundColor: COLORS.green,
            }}
            />

            <Pressable
            onPress={() => router.replace("/onboarding/second")}
            style={{
                width: 13,
                height: 13,
                borderRadius: 7,
                borderWidth: 2,
                borderColor: COLORS.primary,
            }}
            />
        </View>
      </View>
    </Screen>
  );
}
