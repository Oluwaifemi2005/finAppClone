
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from "react-native";
import Svg, { Path, Circle } from "react-native-svg";
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

const NotificationBellIcon = () => (
  <Svg width={20} height={20} viewBox="0 0 24 24" fill="none">
    <Path
      d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0"
      stroke="#FFFFFF"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const KeyIcon = () => (
  <Svg width={20} height={20} viewBox="0 0 24 24" fill="none">
    <Path
      d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.78 7.78 5.5 5.5 0 0 1 7.78-7.78zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"
      stroke="#FFFFFF"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const UserDeleteIcon = () => (
  <Svg width={20} height={20} viewBox="0 0 24 24" fill="none">
    <Circle cx="12" cy="7" r="4" stroke="#FFFFFF" strokeWidth={2} />
    <Path
      d="M4 21v-1a7 7 0 0 1 14 0v1"
      stroke="#FFFFFF"
      strokeWidth={2}
      strokeLinecap="round"
    />
  </Svg>
);

function SettingItem({ title, icon, onPress }) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 12,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View
          style={{
            width: 44,
            height: 44,
            borderRadius: 22,
            backgroundColor: COLORS.green,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {icon}
        </View>

        <Text
          style={{
            fontSize: 15,
            fontWeight: "700",
            color: COLORS.darkGreen,
            marginLeft: 16,
          }}
        >
          {title}
        </Text>
      </View>

      <ChevronRightIcon />
    </TouchableOpacity>
  );
}

export default function SettingsScreen() {
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
            fontSize: 23,
            fontWeight: "900",
            color: COLORS.darkGreen,
          }}
        >
          Settings
        </Text>

        <TouchableOpacity
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

      {/* Content */}
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.lightGreen,
          borderTopLeftRadius: 46,
          borderTopRightRadius: 46,
          paddingHorizontal: 24,
          paddingTop: 24,
          marginBottom: -40
        }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <SettingItem
            title="Notification Settings"
            icon={<NotificationBellIcon />}
            onPress={() => {}}
          />

          <View
            style={{
              height: 1,
              backgroundColor: "#00D09E",
              opacity: 0.3,
              marginVertical: 12,
            }}
          />

          <SettingItem
            title="Password Settings"
            icon={<KeyIcon />}
            onPress={() => {}}
          />

          <View
            style={{
              height: 1,
              backgroundColor: "#00D09E",
              opacity: 0.3,
              marginVertical: 12,
            }}
          />

          <SettingItem
            title="Delete Account"
            icon={<UserDeleteIcon />}
            onPress={() => {}}
          />
        </ScrollView>
      </View>

      <NotificationDrawer
        visible={notificationsVisible}
        onClose={() => setNotificationsVisible(false)}
      />
    </Screen>
  );
}
