
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

const SummaryIcon = ({ expense = false }) => (
  <Svg width={14} height={14} viewBox="0 0 24 24" fill="none">
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
      d={
        expense
          ? "M8 8L16 16M16 16H10M16 16V10"
          : "M8 16L16 8M16 8H10M16 8V14"
      }
      stroke="#093030"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const CheckIcon = () => (
  <Svg width={14} height={14} viewBox="0 0 24 24" fill="none">
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
  <Svg width={18} height={18} viewBox="0 0 24 24" fill="none">
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
      d="M3 9h18M7 2v4M17 2v4"
      stroke="#093030"
      strokeWidth={2}
      strokeLinecap="round"
    />
    <Path
      d="M7 13h2M11 13h2M15 13h2M7 17h2M11 17h2"
      stroke="#093030"
      strokeWidth={2}
      strokeLinecap="round"
    />
  </Svg>
);

const FoodForkKnifeIcon = () => (
  <Svg width={24} height={30} viewBox="0 0 24 32" fill="none">
    <Path
      d="M5 2v10a3 3 0 0 0 3 3v14M8 2v10M11 2v10a3 3 0 0 1-3 3M19 2v27M15 2v6a4 4 0 0 0 4 4"
      stroke="#FFFFFF"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const FOOD_TRANSACTIONS = [
  {
    id: "1",
    month: "April",
    title: "Dinner",
    time: "18:27 - April 30",
    amount: "-$26.00",
  },
  {
    id: "2",
    month: "April",
    title: "Delivery Pizza",
    time: "15:00 - April 24",
    amount: "-$18.35",
  },
  {
    id: "3",
    month: "April",
    title: "Lunch",
    time: "12:30 - April 15",
    amount: "-$15.40",
  },
  {
    id: "4",
    month: "April",
    title: "Brunch",
    time: "9:30 - April 08",
    amount: "-$12.13",
  },
  {
    id: "5",
    month: "March",
    title: "Dinner",
    time: "20:50 - March 31",
    amount: "-$27.20",
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
          borderRadius: 28,
          backgroundColor: COLORS.blue,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FoodForkKnifeIcon />
      </View>

      <View style={{ flex: 1, marginLeft: 16 }}>
        <Text
          style={{
            fontSize: 15,
            fontWeight: "700",
            color: COLORS.darkGreen,
          }}
        >
          {item.title}
        </Text>

        <Text
          style={{
            fontSize: 11,
            fontWeight: "600",
            color: COLORS.blue,
            marginTop: 4,
          }}
        >
          {item.time}
        </Text>
      </View>

      <Text
        style={{
          fontSize: 15,
          fontWeight: "900",
          color: COLORS.blue,
        }}
      >
        {item.amount}
      </Text>
    </View>
  );
}

export default function FoodScreen() {
  const router = useRouter();

  const [notificationsVisible, setNotificationsVisible] = useState(false);

  const months = ["April", "March"];

  return (
    <Screen style={{ backgroundColor: COLORS.green }}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.green} />

      {/* Header */}
      <View
        style={{
          paddingHorizontal: 24,
          paddingTop: 10,
          paddingBottom: 24,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 24,
          }}
        >
          <TouchableOpacity
            onPress={() => router.replace("/(tabs)/category")}
            style={{
              width: 40,
              height: 40,
              alignItems: "center",
              justifyContent: "center",
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
            Food
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

        {/* Balance and Expense */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 22,
          }}
        >
          <View style={{ flex: 1 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 6,
                marginBottom: 5,
              }}
            >
              <SummaryIcon />
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "600",
                  color: COLORS.darkGreen,
                }}
              >
                Total Balance
              </Text>
            </View>

            <Text
              style={{
                fontSize: 25,
                fontWeight: "900",
                color: COLORS.white,
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
              marginRight: 14,
            }}
          />

          <View style={{ flex: 1 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 6,
                marginBottom: 5,
              }}
            >
              <SummaryIcon expense />
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "600",
                  color: COLORS.darkGreen,
                }}
              >
                Total Expense
              </Text>
            </View>

            <Text
              style={{
                fontSize: 25,
                fontWeight: "900",
                color: COLORS.blue,
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
            backgroundColor: COLORS.white,
            borderRadius: 30,
            padding: 2,
            flexDirection: "row",
            overflow: "hidden",
            marginBottom: 12,
          }}
        >
          <View
            style={{
              width: "30%",
              backgroundColor: COLORS.darkGreen,
              borderRadius: 30,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: COLORS.white,
                fontSize: 11,
                fontWeight: "700",
              }}
            >
              30%
            </Text>
          </View>

          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "flex-end",
              paddingRight: 14,
            }}
          >
            <Text
              style={{
                color: COLORS.darkGreen,
                fontSize: 11,
                fontWeight: "700",
                fontStyle: "italic",
              }}
            >
              $20,000.00
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 8,
            paddingLeft: 4,
          }}
        >
          <CheckIcon />
          <Text
            style={{
              fontSize: 12,
              fontWeight: "500",
              color: COLORS.darkGreen,
            }}
          >
            30% Of Your Expenses, Looks Good.
          </Text>
        </View>
      </View>

      {/* Transactions */}
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.lightGreen,
          borderTopLeftRadius: 46,
          borderTopRightRadius: 46,
          paddingHorizontal: 24,
          paddingTop: 24,
        }}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 30 }}
        >
          {months.map((month) => {
            const monthTransactions = FOOD_TRANSACTIONS.filter(
              (item) => item.month === month
            );

            if (monthTransactions.length === 0) return null;

            return (
              <View key={month} style={{ marginBottom: 12 }}>
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
                      color: COLORS.darkGreen,
                    }}
                  >
                    {month}
                  </Text>

                  {month === "April" && (
                    <TouchableOpacity
                      style={{
                        width: 38,
                        height: 38,
                        borderRadius: 12,
                        backgroundColor: COLORS.green,
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <CalendarIcon />
                    </TouchableOpacity>
                  )}
                </View>

                {monthTransactions.map((item) => (
                  <TransactionItem key={item.id} item={item} />
                ))}
              </View>
            );
          })}

          <View style={{ alignItems: "center", marginTop: 8, marginBottom: 20 }}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => router.push("/add-expenses")}
              style={{
                width: 224,
                backgroundColor: COLORS.green,
                paddingVertical: 15,
                borderRadius: 30,
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: COLORS.darkGreen,
                  fontSize: 17,
                  fontWeight: "700",
                }}
              >
                Add Expenses
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>

      <NotificationDrawer
        visible={notificationsVisible}
        onClose={() => setNotificationsVisible(false)}
      />
    </Screen>
  );
}
