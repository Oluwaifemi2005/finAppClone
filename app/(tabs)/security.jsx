
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from "react-native";
import Svg, { Path } from "react-native-svg";
import { useRouter } from "expo-router";

import Screen from "../../components/Screen";
import NotificationDrawer from "../../components/NotificationDrawer";
import { COLORS } from "../../constants/theme";

const BackArrowIcon = () => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
    <Path
      d="M19 12H5M12 19l-7-7 7-7"
      stroke="#FFFFFF"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const BellIcon = () => (
  <Svg width={20} height={20} viewBox="0 0 24 24" fill="none">
    <Path
      d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0"
      stroke="#093030"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const ChevronRightIcon = () => (
  <Svg width={20} height={20} viewBox="0 0 24 24" fill="none">
    <Path
      d="M9 18l6-6-6-6"
      stroke="#093030"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

function SecurityOption({ title, onPress }) {
  return (
    <View style={{ marginBottom: 22 }}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={onPress}
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingVertical: 10,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: "700",
            color: COLORS.darkGreen,
          }}
        >
          {title}
        </Text>

        <ChevronRightIcon />
      </TouchableOpacity>

      <View
        style={{
          height: 1,
          backgroundColor: "rgba(0,208,158,0.3)",
          marginTop: 12,
        }}
      />
    </View>
  );
}

export default function SecurityScreen() {
  const router = useRouter();
  const [notificationsVisible, setNotificationsVisible] = useState(false);

  return (
    <Screen style={{ backgroundColor: COLORS.green }}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.green} />

      {/* Header */}
      <View
        style={{
          paddingHorizontal: 24,
          paddingTop: 10,
          paddingBottom: 24,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => router.replace("/(tabs)/profile")}
          style={{
            width: 40,
            height: 40,
            alignItems: "center",
            justifyContent: "center",
            marginLeft: -8,
          }}
        >
          <BackArrowIcon />
        </TouchableOpacity>

        <Text
          style={{
            fontSize: 24,
            fontWeight: "900",
            color: COLORS.darkGreen,
          }}
        >
          Security
        </Text>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => setNotificationsVisible(true)}
          style={{
            width: 44,
            height: 44,
            borderRadius: 22,
            backgroundColor: COLORS.white,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <BellIcon />
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.lightGreen,
          borderTopLeftRadius: 46,
          borderTopRightRadius: 46,
          paddingHorizontal: 24,
          paddingTop: 32,
          marginBottom: -40
        }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text
            style={{
              fontSize: 21,
              fontWeight: "800",
              color: COLORS.darkGreen,
              marginBottom: 28,
            }}
          >
            Security
          </Text>

          <SecurityOption
            title="Change Pin"
            onPress={() => {}}
          />

          <SecurityOption
            title="Fingerprint"
            onPress={() => {}}
          />

          <SecurityOption
            title="Terms And Conditions"
            onPress={() => {}}
          />
        </ScrollView>
      </View>

      {/* Shared Notification Drawer */}
      <NotificationDrawer
        visible={notificationsVisible}
        onClose={() => setNotificationsVisible(false)}
      />
    </Screen>
  );
}
