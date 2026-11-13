
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from "react-native";
import Svg, { Path, Rect } from "react-native-svg";
import { useRouter } from "expo-router";

import Screen from "../../components/Screen";
import NotificationDrawer from "../../components/NotificationDrawer";

const BackArrowIcon = () => (
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

const BellIcon = () => (
  <Svg width={20} height={20} viewBox="0 0 24 24">
    <Path
      d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0"
      stroke="#093030"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const SummaryIcon = ({ type }) => (
  <Svg width={14} height={14} viewBox="0 0 24 24">
    <Rect
      x="2"
      y="2"
      width="20"
      height="20"
      rx="4"
      stroke="#093030"
      strokeWidth={2}
    />
    {type === "up" ? (
      <Path
        d="M8 16L16 8M16 8H10M16 8V14"
        stroke="#093030"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ) : (
      <Path
        d="M8 8L16 16M16 16H10M16 16V10"
        stroke="#093030"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    )}
  </Svg>
);

const CheckIcon = () => (
  <Svg width={14} height={14} viewBox="0 0 24 24">
    <Rect
      x="2"
      y="2"
      width="20"
      height="20"
      rx="4"
      stroke="#093030"
      strokeWidth={2}
    />
    <Path
      d="M7 12.5L10.5 16L17 8"
      stroke="#093030"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const CalendarIcon = () => (
  <Svg width={18} height={18} viewBox="0 0 24 24">
    <Rect
      x="3"
      y="4"
      width="18"
      height="17"
      rx="3"
      stroke="#093030"
      strokeWidth={2}
    />
    <Path
      d="M3 9h18M7 2v4M17 2v4M7 13h2M11 13h2M15 13h2M7 17h2M11 17h2"
      stroke="#093030"
      strokeWidth={2}
      strokeLinecap="round"
    />
  </Svg>
);

const GroceriesBagIcon = () => (
  <Svg width={24} height={24} viewBox="0 0 24 24">
    <Path
      d="M6 3h12l-1.5 18H7.5L6 3z"
      stroke="#FFFFFF"
      strokeWidth={1.8}
      strokeLinejoin="round"
    />
    <Path
      d="M10 3v4M14 3v4M8 8l2-2 2 2"
      stroke="#FFFFFF"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const GROCERY_TRANSACTIONS = [
  {
    id: "1",
    month: "March",
    title: "Pantry",
    time: "18:27 - March 10",
    amount: "-$53.59",
  },
  {
    id: "2",
    month: "March",
    title: "Snacks",
    time: "15:00 - March 01",
    amount: "-$35.03",
  },
  {
    id: "3",
    month: "February",
    title: "Canned Food",
    time: "10:47 - February 28",
    amount: "-$11.82",
  },
  {
    id: "4",
    month: "February",
    title: "Veggies",
    time: "7:30 - February 20",
    amount: "-$14.79",
  },
  {
    id: "5",
    month: "February",
    title: "Groceries",
    time: "18:50 - February 01",
    amount: "-$175.35",
  },
];

function TransactionItem({ item }) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 22,
      }}
    >
      <View
        style={{
          width: 56,
          height: 56,
          backgroundColor: "#0066FF",
          borderRadius: 28,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <GroceriesBagIcon />
      </View>

      <View style={{ flex: 1, marginLeft: 16 }}>
        <Text
          style={{
            fontSize: 15,
            fontWeight: "700",
            color: "#093030",
          }}
        >
          {item.title}
        </Text>

        <Text
          style={{
            fontSize: 11,
            fontWeight: "600",
            color: "#0066FF",
            marginTop: 4,
          }}
        >
          {item.time}
        </Text>
      </View>

      <Text
        style={{
          fontSize: 15,
          fontWeight: "800",
          color: "#0066FF",
        }}
      >
        {item.amount}
      </Text>
    </View>
  );
}

export default function GroceriesScreen() {
  const router = useRouter();

  const [notificationsVisible, setNotificationsVisible] =
    useState(false);

  const months = ["March", "February"];

  return (
    <Screen style={{ backgroundColor: "#00D09E" }}>
      <StatusBar barStyle="dark-content" backgroundColor="#00D09E" />

      {/* Header */}
      <View style={{ paddingHorizontal: 24, paddingTop: 8, paddingBottom: 24 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 20,
          }}
        >
          <TouchableOpacity
            onPress={() => router.replace("/(tabs)/category")}
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
              color: "#093030",
            }}
          >
            Groceries
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

        {/* Financial Summary */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <View style={{ flex: 1 }}>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
              <SummaryIcon type="up" />
              <Text style={{ fontSize: 12, fontWeight: "600", color: "#093030" }}>
                Total Balance
              </Text>
            </View>

            <Text
              style={{
                fontSize: 25,
                fontWeight: "900",
                color: "#FFFFFF",
                marginTop: 4,
              }}
            >
              $7,783.00
            </Text>
          </View>

          <View
            style={{
              width: 1.5,
              height: 42,
              backgroundColor: "rgba(255,255,255,0.4)",
              marginHorizontal: 12,
            }}
          />

          <View style={{ flex: 1 }}>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
              <SummaryIcon type="down" />
              <Text style={{ fontSize: 12, fontWeight: "600", color: "#093030" }}>
                Total Expense
              </Text>
            </View>

            <Text
              style={{
                fontSize: 25,
                fontWeight: "900",
                color: "#0066FF",
                marginTop: 4,
              }}
            >
              -$1,187.40
            </Text>
          </View>
        </View>

        {/* Budget Progress */}
        <View
          style={{
            height: 28,
            backgroundColor: "#FFFFFF",
            borderRadius: 20,
            padding: 2,
            flexDirection: "row",
            overflow: "hidden",
            alignItems: "center",
            marginBottom: 12,
          }}
        >
          <View
            style={{
              width: "30%",
              height: "100%",
              backgroundColor: "#093030",
              borderRadius: 20,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "#FFFFFF", fontSize: 11, fontWeight: "700" }}>
              30%
            </Text>
          </View>

          <View style={{ flex: 1, alignItems: "flex-end", paddingRight: 14 }}>
            <Text style={{ color: "#093030", fontSize: 11, fontWeight: "700" }}>
              $20,000.00
            </Text>
          </View>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
          <CheckIcon />
          <Text style={{ fontSize: 11, fontWeight: "500", color: "#093030" }}>
            30% Of Your Expenses, Looks Good.
          </Text>
        </View>
      </View>

      {/* Transaction Sheet */}
      <View
        style={{
          flex: 1,
          backgroundColor: "#F1FFF3",
          borderTopLeftRadius: 46,
          borderTopRightRadius: 46,
          paddingHorizontal: 24,
          paddingTop: 26,
        }}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 35 }}
        >
          {months.map((month) => {
            const monthTransactions = GROCERY_TRANSACTIONS.filter(
              (item) => item.month === month
            );

            return (
              <View key={month} style={{ marginBottom: 20 }}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 22,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "700",
                      color: "#093030",
                    }}
                  >
                    {month}
                  </Text>

                  {month === "March" && (
                    <View
                      style={{
                        width: 36,
                        height: 36,
                        backgroundColor: "#00D09E",
                        borderRadius: 12,
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <CalendarIcon />
                    </View>
                  )}
                </View>

                {monthTransactions.map((item) => (
                  <TransactionItem key={item.id} item={item} />
                ))}
              </View>
            );
          })}
        </ScrollView>
      </View>

      <NotificationDrawer
        visible={notificationsVisible}
        onClose={() => setNotificationsVisible(false)}
      />
    </Screen>
  );
}
