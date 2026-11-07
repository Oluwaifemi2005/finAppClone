
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from "react-native";
import Screen from "../../components/Screen";
import NotificationDrawer from "../../components/NotificationDrawer";
import Svg, { Path, Circle, Rect } from "react-native-svg";

const COLORS = {
  green: "#00D09E",
  dark: "#093030",
  light: "#F1FFF3",
  blue: "#0066FF",
  muted: "#5D6B6B",
};

function BellIcon() {
  return (
    <Svg width={20} height={20} viewBox="0 0 24 24" fill="none">
      <Path
        d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0"
        stroke={COLORS.dark}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function IncomeIcon() {
  return (
    <Svg width={28} height={28} viewBox="0 0 24 24" fill="none">
      <Rect x="2" y="2" width="20" height="20" rx="4" stroke={COLORS.green} strokeWidth={2.2} />
      <Path d="M7 17L17 7M17 7H10M17 7V14" stroke={COLORS.green} strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

function ExpenseIcon() {
  return (
    <Svg width={28} height={28} viewBox="0 0 24 24" fill="none">
      <Rect x="2" y="2" width="20" height="20" rx="4" stroke={COLORS.blue} strokeWidth={2.2} />
      <Path d="M7 7L17 17M17 17H10M17 17V10" stroke={COLORS.blue} strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

function CategoryIcon({ type }) {
  const common = {
    stroke: "#FFFFFF",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  if (type === "Salary") {
    return (
      <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
        <Path d="M3 6l9-4 9 4-9 4-9-4z" {...common} />
        <Path d="M3 10.5l9 4 9-4M3 15l9 4 9-4" {...common} />
      </Svg>
    );
  }

  if (type === "Groceries") {
    return (
      <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
        <Path d="M6 3h12l-1.5 18H7.5L6 3z" {...common} />
        <Path d="M10 3v4M14 3v4M8 8l2-2 2 2" {...common} />
      </Svg>
    );
  }

  if (type === "Rent") {
    return (
      <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
        <Circle cx="8" cy="8" r="3" {...common} />
        <Path d="M11 8h7v3h-2v-3M3 18c2-2 5-3 8-1l7-3c2-1 4 0 4 2v1c0 2-3 3-5 3H7" {...common} />
      </Svg>
    );
  }

  if (type === "Transport") {
    return (
      <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
        <Rect x="4" y="3" width="16" height="15" rx="3" {...common} />
        <Path d="M4 9h16M4 14h16M6 18v2M18 18v2" {...common} />
        <Circle cx="8" cy="16" r="1.2" fill="#FFFFFF" />
        <Circle cx="16" cy="16" r="1.2" fill="#FFFFFF" />
      </Svg>
    );
  }

  return (
    <Svg width={24} height={30} viewBox="0 0 24 32" fill="none">
      <Path d="M5 2v10a3 3 0 0 0 3 3v14M8 2v10M11 2v10a3 3 0 0 1-3 3M19 2v27M15 2v6a4 4 0 0 0 4 4" {...common} strokeWidth={2} />
    </Svg>
  );
}


const TRANSACTIONS = [
  // Income
  {
    id: "1",
    title: "Salary",
    time: "18:27 - April 30",
    category: "Monthly",
    amount: "$4,000.00",
    color: "#70A6FF",
    type: "Income",
    month: "April",
  },
  {
    id: "2",
    title: "Others",
    time: "17:00 - April 24",
    category: "Payments",
    amount: "$120.00",
    color: "#70A6FF",
    type: "Income",
    month: "April",
  },
  {
    id: "3",
    title: "Salary",
    time: "18:39 - March 31",
    category: "Monthly",
    amount: "$4,000.00",
    color: "#70A6FF",
    type: "Income",
    month: "March",
  },
  {
    id: "4",
    title: "Others",
    time: "9:30 - March 12",
    category: "Upwork",
    amount: "$340.00",
    color: "#70A6FF",
    type: "Income",
    month: "March",
  },
  {
    id: "5",
    title: "Others",
    time: "19:30 - February 28",
    category: "Upwork",
    amount: "$340.00",
    color: "#70A6FF",
    type: "Income",
    month: "February",
  },

  // Expenses
  {
    id: "6",
    title: "Groceries",
    time: "17:00 - April 24",
    category: "Pantry",
    amount: "-$100.00",
    color: "#3282B8",
    type: "Expense",
    month: "April",
  },
  {
    id: "7",
    title: "Rent",
    time: "8:30 - April 15",
    category: "Rent",
    amount: "-$674.40",
    color: "#0052FF",
    type: "Expense",
    month: "April",
  },
  {
    id: "8",
    title: "Transport",
    time: "7:30 - April 08",
    category: "Fuel",
    amount: "-$4.13",
    color: "#38B6FF",
    type: "Expense",
    month: "April",
  },
  {
    id: "9",
    title: "Food",
    time: "19:30 - March 31",
    category: "Dinner",
    amount: "-$70.40",
    color: "#70A6FF",
    type: "Expense",
    month: "March",
  },
];


function TransactionItem({ item }) {
  return (
    <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 22 }}>
      <View
        style={{
          width: 54,
          height: 54,
          borderRadius: 27,
          backgroundColor: item.color,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CategoryIcon type={item.title} />
      </View>

      <View style={{ flex: 1, marginLeft: 13 }}>
        <Text style={{ fontSize: 15, fontWeight: "bold", color: COLORS.dark }}>
          {item.title}
        </Text>
        <Text style={{ fontSize: 10, fontWeight: "600", color: COLORS.blue, marginTop: 4 }}>
          {item.time}
        </Text>
      </View>

      <View style={{ width: 1.5, height: 32, backgroundColor: COLORS.green, opacity: 0.4, marginHorizontal: 9 }} />

      <Text style={{ width: 48, fontSize: 11, fontWeight: "600", color: COLORS.muted }}>
        {item.category}
      </Text>

      <View style={{ width: 1.5, height: 32, backgroundColor: COLORS.green, opacity: 0.4, marginHorizontal: 9 }} />

      <Text
        style={{
          fontSize: 12,
          fontWeight: "800",
          color: item.income ? COLORS.dark : COLORS.blue,
        }}
      >
        {item.amount}
      </Text>
    </View>
  );
}

export default function TransactionScreen() {
  const [notificationsVisible, setNotificationsVisible] = useState(false);
  const [activeType, setActiveType] = useState("Expense");

  const filteredTransactions = TRANSACTIONS.filter(
  (item) => item.type === activeType
);

const months = ["April", "March", "February"];

  return (
    <Screen style={{ backgroundColor: COLORS.green }}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.green} />

      {/* Header */}
      <View style={{ paddingHorizontal: 24, paddingTop: 10, paddingBottom: 22 }}>
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
          <View style={{ width: 44 }} />
          <Text style={{ fontSize: 24, fontWeight: "900", color: COLORS.dark }}>
            Transaction
          </Text>
          <TouchableOpacity
            onPress={() => setNotificationsVisible(true)}
            activeOpacity={0.8}
            style={{
              width: 44,
              height: 44,
              borderRadius: 22,
              backgroundColor: "#FFFFFF",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <BellIcon />
          </TouchableOpacity>
        </View>

        {/* Total Balance */}
        <View
          style={{
            backgroundColor: COLORS.light,
            borderRadius: 24,
            paddingVertical: 17,
            alignItems: "center",
            marginBottom: 14,
          }}
        >
          <Text style={{ fontSize: 13, fontWeight: "600", color: COLORS.dark }}>
            Total Balance
          </Text>
          <Text style={{ fontSize: 30, fontWeight: "900", color: COLORS.dark, marginTop: 3 }}>
            $7,783.00
          </Text>
        </View>

        {/* Income and Expense */}

        <View style={{ flexDirection: "row", gap: 13 }}>
        <TouchableOpacity
            activeOpacity={0.85}
            onPress={() => setActiveType("Income")}
            style={{
            flex: 1,
            backgroundColor: activeType === "Income" ? "#0066FF" : "#F1FFF3",
            borderRadius: 23,
            paddingVertical: 15,
            alignItems: "center",
            }}
        >
            <IncomeIcon />
            <Text style={{
            fontSize: 13,
            fontWeight: "600",
            color: activeType === "Income" ? "#FFFFFF" : "#093030",
            marginTop: 6,
            }}>
            Income
            </Text>
            <Text style={{
            fontSize: 17,
            fontWeight: "900",
            color: activeType === "Income" ? "#FFFFFF" : "#093030",
            marginTop: 3,
            }}>
            $4,120.00
            </Text>
        </TouchableOpacity>

        <TouchableOpacity
            activeOpacity={0.85}
            onPress={() => setActiveType("Expense")}
            style={{
            flex: 1,
            backgroundColor: activeType === "Expense" ? "#0066FF" : "#F1FFF3",
            borderRadius: 23,
            paddingVertical: 15,
            alignItems: "center",
            }}
        >
            <ExpenseIcon />
            <Text style={{
            fontSize: 13,
            fontWeight: "600",
            color: activeType === "Expense" ? "#FFFFFF" : "#093030",
            marginTop: 6,
            }}>
            Expense
            </Text>
            <Text style={{
            fontSize: 17,
            fontWeight: "900",
            color: activeType === "Expense" ? "#FFFFFF" : "#0066FF",
            marginTop: 3,
            }}>
            $1,187.40
            </Text>
        </TouchableOpacity>
        </View>

      </View>

      {/* Transactions */}
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.light,
          borderTopLeftRadius: 42,
          borderTopRightRadius: 42,
          paddingHorizontal: 24,
          paddingTop: 24,
        }}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 30 }}
        >
          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 22 }}>
            <Text style={{ fontSize: 16, fontWeight: "bold", color: COLORS.dark }}>
              April
            </Text>
            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                width: 38,
                height: 38,
                borderRadius: 12,
                backgroundColor: COLORS.green,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Svg width={18} height={18} viewBox="0 0 24 24" fill="none">
                <Rect x="3" y="4" width="18" height="17" rx="3" stroke={COLORS.dark} strokeWidth={2} />
                <Path d="M3 9h18M7 2v4M17 2v4M7 13h2M11 13h2M15 13h2" stroke={COLORS.dark} strokeWidth={2} strokeLinecap="round" />
              </Svg>
            </TouchableOpacity>
          </View>


            {months.map((month) => {
            const monthTransactions = filteredTransactions.filter(
                (item) => item.month === month
            );

            if (monthTransactions.length === 0) return null;

            return (
                <View key={month} style={{ marginBottom: 25 }}>
                <Text style={{
                    fontSize: 16,
                    fontWeight: "bold",
                    color: "#093030",
                    marginBottom: 22,
                }}>
                    {month}
                </Text>

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
