
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Image,
} from "react-native";
import Svg, { Path, Circle } from "react-native-svg";

import Screen from "../../components/Screen";
import NotificationDrawer from "../../components/NotificationDrawer";
import { COLORS } from "../../constants/theme";
import { useRouter } from "expo-router";

// Header icon
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

// Menu icons
const EditProfileIcon = () => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
    <Circle cx="12" cy="8" r="4" stroke="#FFFFFF" strokeWidth={1.8} />
    <Path
      d="M4 20c0-4 4-6 8-6s8 2 8 6"
      stroke="#FFFFFF"
      strokeWidth={1.8}
      strokeLinecap="round"
    />
  </Svg>
);

const SecurityIcon = () => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
    <Path
      d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
      stroke="#FFFFFF"
      strokeWidth={1.8}
      strokeLinejoin="round"
    />
    <Path
      d="M9 12l2 2 4-4"
      stroke="#FFFFFF"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const SettingIcon = () => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
    <Circle cx="12" cy="12" r="3" stroke="#FFFFFF" strokeWidth={1.8} />
    <Path
      d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0l.06.06a2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
      stroke="#FFFFFF"
      strokeWidth={1.8}
    />
  </Svg>
);

const HelpIcon = () => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
    <Circle cx="12" cy="12" r="9" stroke="#FFFFFF" strokeWidth={1.8} />
    <Path
      d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"
      stroke="#FFFFFF"
      strokeWidth={1.8}
      strokeLinecap="round"
    />
    <Circle cx="12" cy="17" r="1" fill="#FFFFFF" />
  </Svg>
);

const LogoutIcon = () => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
    <Path
      d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"
      stroke="#FFFFFF"
      strokeWidth={1.8}
      strokeLinecap="round"
    />
    <Path
      d="M10 17l5-5-5-5M15 12H3"
      stroke="#FFFFFF"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

// Reusable menu row
function ProfileMenuItem({ title, icon, color, onPress }) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 22,
      }}
    >
      <View
        style={{
          width: 56,
          height: 56,
          borderRadius: 28,
          backgroundColor: color,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {icon}
      </View>

      <Text
        style={{
          fontSize: 16,
          fontWeight: "700",
          color: COLORS.darkGreen,
          marginLeft: 16,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

export default function ProfileScreen() {
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
          paddingBottom: 55,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={{ width: 44 }} />

        <Text
          style={{
            fontSize: 24,
            fontWeight: "900",
            color: COLORS.darkGreen,
          }}
        >
          Profile
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
          marginBottom: -40
        }}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 30 }}
        >
          {/* Profile Information */}
          <View
            style={{
              alignItems: "center",
              marginTop: -45,
              marginBottom: 38,
            }}
          >
            <View
              style={{
                width: 112,
                height: 112,
                borderRadius: 56,
                padding: 5,
                marginTop:50,
                backgroundColor: COLORS.lightGreen,
                elevation: 4,
              }}
            >
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop",
                }}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 56,
                }}
              />
            </View>

            <Text
              style={{
                fontSize: 21,
                fontWeight: "900",
                color: COLORS.darkGreen,
                marginTop: 12,
              }}
            >
              MANNY
            </Text>

            <Text
              style={{
                fontSize: 12,
                fontWeight: "600",
                color: "#5D6B6B",
                marginTop: 3,
              }}
            >
              ID: 25030024
            </Text>
          </View>

          {/* Profile Menu */}
          <View>
            <ProfileMenuItem
              title="Edit Profile"
              icon={<EditProfileIcon />}
              color="#38B6FF"
              onPress={() => router.push("/edit-profile")}
            />

            <ProfileMenuItem
              title="Security"
              icon={<SecurityIcon />}
              color="#38B6FF"
              onPress={() => router.push("/security")}
            />
            <ProfileMenuItem
              title="Setting"
              icon={<SettingIcon />}
              color="#0066FF"
              onPress={() => router.push("/setting")}
            />

            <ProfileMenuItem
              title="Help"
              icon={<HelpIcon />}
              color="#38B6FF"
              onPress={() => router.push("/help")}
            />

            <ProfileMenuItem
              title="Logout"
              icon={<LogoutIcon />}
              color="#0066FF"
              onPress={() => router.push("/logout")}
            />
          </View>
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
