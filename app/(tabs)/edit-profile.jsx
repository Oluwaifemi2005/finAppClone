
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Image,
  Switch,
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

const CameraIcon = () => (
  <Svg width={16} height={16} viewBox="0 0 24 24" fill="none">
    <Path
      d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"
      stroke="#FFFFFF"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Circle cx="12" cy="13" r="4" stroke="#FFFFFF" strokeWidth={2} />
  </Svg>
);

function FormField({ label, value, onChangeText, placeholder, ...props }) {
  return (
    <View style={{ marginBottom: 18 }}>
      <Text
        style={{
          fontSize: 14,
          fontWeight: "700",
          color: COLORS.darkGreen,
          marginBottom: 8,
          marginLeft: 8,
        }}
      >
        {label}
      </Text>

      <View
        style={{
          backgroundColor: COLORS.secondary,
          borderRadius: 24,
          paddingHorizontal: 20,
          paddingVertical: 14,
        }}
      >
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#7D8A8A"
          style={{
            color: COLORS.darkGreen,
            fontSize: 15,
            padding: 0,
          }}
          {...props}
        />
      </View>
    </View>
  );
}

export default function EditProfileScreen() {
  const router = useRouter();

  const [username, setUsername] = useState("John Smith");
  const [phone, setPhone] = useState("+44 555 5555 55");
  const [email, setEmail] = useState("example@example.com");
  const [pushNotifications, setPushNotifications] = useState(true);
  const [darkTheme, setDarkTheme] = useState(false);
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
            fontSize: 22,
            fontWeight: "900",
            color: COLORS.darkGreen,
          }}
        >
          Edit My Profile
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
          {/* Avatar */}
          <View
            style={{
              alignItems: "center",
              marginTop: 20,
              marginBottom: 30,
            }}
          >
            <View>
              <View
                style={{
                  width: 112,
                  height: 112,
                  borderRadius: 56,
                  padding: 5,
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

              <TouchableOpacity
                activeOpacity={0.8}
                style={{
                  position: "absolute",
                  bottom: 0,
                  right: 4,
                  width: 32,
                  height: 32,
                  borderRadius: 16,
                  backgroundColor: COLORS.green,
                  alignItems: "center",
                  justifyContent: "center",
                  borderWidth: 2,
                  borderColor: COLORS.lightGreen,
                }}
              >
                <CameraIcon />
              </TouchableOpacity>
            </View>

            <Text
              style={{
                fontSize: 21,
                fontWeight: "900",
                color: COLORS.darkGreen,
                marginTop: 12,
              }}
            >
              John Smith
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

          {/* Account Settings */}
          <Text
            style={{
              fontSize: 19,
              fontWeight: "800",
              color: COLORS.darkGreen,
              marginBottom: 18,
            }}
          >
            Account Settings
          </Text>

          <FormField
            label="Username"
            value={username}
            onChangeText={setUsername}
            placeholder="Enter username"
          />

          <FormField
            label="Phone"
            value={phone}
            onChangeText={setPhone}
            placeholder="Enter phone number"
            keyboardType="phone-pad"
          />

          <FormField
            label="Email Address"
            value={email}
            onChangeText={setEmail}
            placeholder="Enter email address"
            keyboardType="email-address"
            autoCapitalize="none"
          />

          {/* Preferences */}
          <View style={{ marginTop: 8, marginBottom: 28 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 20,
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "700",
                  color: COLORS.darkGreen,
                }}
              >
                Push Notifications
              </Text>

              <Switch
                trackColor={{ false: "#DFF7E2", true: COLORS.green }}
                thumbColor="#FFFFFF"
                ios_backgroundColor="#DFF7E2"
                onValueChange={setPushNotifications}
                value={pushNotifications}
              />
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "700",
                  color: COLORS.darkGreen,
                }}
              >
                Turn Dark Theme
              </Text>

              <Switch
                trackColor={{ false: "#DFF7E2", true: COLORS.green }}
                thumbColor="#FFFFFF"
                ios_backgroundColor="#DFF7E2"
                onValueChange={setDarkTheme}
                value={darkTheme}
              />
            </View>
          </View>

          {/* Update Button */}
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {}}
            style={{
              width: 224,
              alignSelf: "center",
              backgroundColor: COLORS.green,
              paddingVertical: 16,
              borderRadius: 30,
              alignItems: "center",
              marginBottom: 25,
            }}
          >
            <Text
              style={{
                color: COLORS.darkGreen,
                fontSize: 17,
                fontWeight: "700",
              }}
            >
              Update Profile
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <NotificationDrawer
        visible={notificationsVisible}
        onClose={() => setNotificationsVisible(false)}
      />
    </Screen>
  );
}
