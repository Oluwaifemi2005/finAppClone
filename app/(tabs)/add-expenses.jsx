
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Svg, { Path, Rect } from "react-native-svg";
import { useRouter } from "expo-router";
import Screen from "../../components/Screen";
import NotificationDrawer from "../../components/NotificationDrawer";

function BackArrowIcon() {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24">
      <Path
        d="M19 12H5M12 19l-7-7 7-7"
        stroke="#FFFFFF"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function BellIcon() {
  return (
    <Svg width={20} height={20} viewBox="0 0 24 24">
      <Path
        d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0"
        stroke="#093030"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </Svg>
  );
}

function CalendarIcon() {
  return (
    <Svg width={22} height={22} viewBox="0 0 24 24">
      <Rect
        x="3"
        y="4"
        width="18"
        height="17"
        rx="3"
        stroke="#00D09E"
        strokeWidth={2}
        fill="none"
      />
      <Path
        d="M3 9h18M7 2v4M17 2v4"
        stroke="#00D09E"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </Svg>
  );
}

function ChevronDownIcon() {
  return (
    <Svg width={20} height={20} viewBox="0 0 24 24">
      <Path
        d="M6 9l6 6 6-6"
        stroke="#00D09E"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </Svg>
  );
}

export default function AddExpensesScreen() {
  const router = useRouter();

  const [date, setDate] = useState("April 30, 2024");
  const [category, setCategory] = useState("Food");
  const [amount, setAmount] = useState("26.00");
  const [title, setTitle] = useState("Dinner");
  const [message, setMessage] = useState("");
  const [notificationsVisible, setNotificationsVisible] = useState(false);

  return (
    <Screen style={{ backgroundColor: "#00D09E" }}>
      <StatusBar barStyle="light-content" backgroundColor="#00D09E" />

      {/* Header */}
      <View
        style={{
          paddingHorizontal: 24,
          paddingTop: 8,
          paddingBottom: 24,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity
          onPress={() => router.replace("/food")}
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
            color: "#093030",
          }}
        >
          Add Expenses
        </Text>

        <TouchableOpacity
          onPress={() => setNotificationsVisible(true)}
          style={{
            width: 44,
            height: 44,
            borderRadius: 22,
            backgroundColor: "#FFFFFF",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <BellIcon />
        </TouchableOpacity>
      </View>

      {/* Form */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "#F1FFF3",
            borderTopLeftRadius: 46,
            borderTopRightRadius: 46,
            paddingHorizontal: 24,
            paddingTop: 32,
          }}
        >
          <ScrollView
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={{ paddingBottom: 40 }}
          >
            {/* Date */}
            <View style={{ marginBottom: 22 }}>
              <Text style={styles.label}>Date</Text>

              <View style={styles.inputContainer}>
                <TextInput
                  value={date}
                  onChangeText={setDate}
                  placeholder="Select date"
                  placeholderTextColor="#7D8A8A"
                  style={styles.input}
                />

                <CalendarIcon />
              </View>
            </View>

            {/* Category */}
            <View style={{ marginBottom: 22 }}>
              <Text style={styles.label}>Category</Text>

              <View style={styles.inputContainer}>
                <TextInput
                  value={category}
                  onChangeText={setCategory}
                  placeholder="Select the category"
                  placeholderTextColor="#7D8A8A"
                  style={styles.input}
                />

                <ChevronDownIcon />
              </View>
            </View>

            {/* Amount */}
            <View style={{ marginBottom: 22 }}>
              <Text style={styles.label}>Amount</Text>

              <View style={styles.inputContainer}>
                <TextInput
                  value={amount}
                  onChangeText={setAmount}
                  placeholder="0.00"
                  placeholderTextColor="#7D8A8A"
                  keyboardType="decimal-pad"
                  style={styles.input}
                />
              </View>
            </View>

            {/* Expense Title */}
            <View style={{ marginBottom: 22 }}>
              <Text style={styles.label}>Expense Title</Text>

              <View style={styles.inputContainer}>
                <TextInput
                  value={title}
                  onChangeText={setTitle}
                  placeholder="Enter expense title"
                  placeholderTextColor="#7D8A8A"
                  style={styles.input}
                />
              </View>
            </View>

            {/* Message */}
            <View style={{ marginBottom: 28 }}>
              <View
                style={{
                  backgroundColor: "#DFF7E2",
                  borderRadius: 32,
                  padding: 20,
                  height: 160,
                }}
              >
                <TextInput
                  value={message}
                  onChangeText={setMessage}
                  placeholder="Enter Message"
                  placeholderTextColor="#00D09E"
                  multiline
                  textAlignVertical="top"
                  style={{
                    flex: 1,
                    fontSize: 15,
                    color: "#093030",
                  }}
                />
              </View>
            </View>

            {/* Save */}
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                // UI-only screen: no data is saved yet.
              }}
              style={{
                width: 224,
                alignSelf: "center",
                backgroundColor: "#00D09E",
                paddingVertical: 16,
                borderRadius: 30,
                alignItems: "center",
                marginBottom: 20,
              }}
            >
              <Text
                style={{
                  color: "#093030",
                  fontSize: 18,
                  fontWeight: "700",
                }}
              >
                Save
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>

      <NotificationDrawer
        visible={notificationsVisible}
        onClose={() => setNotificationsVisible(false)}
      />
    </Screen>
  );
}

const styles = {
  label: {
    fontSize: 14,
    fontWeight: "700",
    color: "#093030",
    marginBottom: 8,
    paddingLeft: 8,
  },
  inputContainer: {
    width: "100%",
    backgroundColor: "#DFF7E2",
    borderRadius: 24,
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  input: {
    flex: 1,
    color: "#093030",
    fontSize: 15,
    fontWeight: "500",
    padding: 0,
  },
};
