
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  Modal,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Svg, { Path, Rect, Circle } from "react-native-svg";
import NotificationDrawer from "../../components/NotificationDrawer";

const BellIcon = () => (
  <Svg width={22} height={22} viewBox="0 0 24 24" fill="none">
    <Path
      d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0"
      stroke="#093030"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const UpRightArrowIcon = () => (
  <Svg width={14} height={14} viewBox="0 0 24 24" fill="none">
    <Rect x="2" y="2" width="20" height="20" rx="4" stroke="#093030" strokeWidth={2} />
    <Path d="M8 16L16 8M16 8H10M16 8V14" stroke="#093030" strokeWidth={2} strokeLinecap="round" />
  </Svg>
);

const DownRightArrowIcon = () => (
  <Svg width={14} height={14} viewBox="0 0 24 24" fill="none">
    <Rect x="2" y="2" width="20" height="20" rx="4" stroke="#093030" strokeWidth={2} />
    <Path d="M8 8L16 16M16 16H10M16 16V10" stroke="#093030" strokeWidth={2} strokeLinecap="round" />
  </Svg>
);

const CheckCircleIcon = () => (
  <Svg width={14} height={14} viewBox="0 0 24 24" fill="none">
    <Rect x="2" y="2" width="20" height="20" rx="4" stroke="#093030" strokeWidth={2} />
    <Path d="M7 12.5L10.5 16L17 8" stroke="#093030" strokeWidth={2} strokeLinecap="round" />
  </Svg>
);
const CarIcon = () => (
  <Svg width={32} height={24} viewBox="0 0 24 20" fill="none">
    <Path
      d="M4 11l2-6h12l2 6M2 11h20v5a1 1 0 0 1-1 1h-1a2 2 0 0 1-4 0H8a2 2 0 0 1-4 0H3a1 1 0 0 1-1-1v-5z"
      stroke="#093030"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Circle cx="6.5" cy="13.5" r="1.5" fill="#093030" />
    <Circle cx="17.5" cy="13.5" r="1.5" fill="#093030" />
  </Svg>
);

const BanknotesCardIcon = () => (
  <Svg width={36} height={36} viewBox="0 0 24 24" fill="none">
    <Path d="M3 6l9-4 9 4-9 4-9-4z" stroke="#093030" strokeWidth={1.6} strokeLinejoin="round" />
    <Path d="M3 10l9 4 9-4M3 14l9 4 9-4" stroke="#093030" strokeWidth={1.6} strokeLinejoin="round" />
  </Svg>
);

const ForkKnifeIcon = () => (
  <Svg width={24} height={32} viewBox="0 0 24 32" fill="none">
    <Path
      d="M5 2v10a3 3 0 0 0 3 3v14M8 2v10M11 2v10a3 3 0 0 1-3 3M19 2v27M15 2v6a4 4 0 0 0 4 4"
      stroke="#093030"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
const SalaryIcon = () => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
    <Path d="M3 6l9-4 9 4-9 4-9-4z" stroke="#FFFFFF" strokeWidth={1.8} strokeLinejoin="round" />
    <Path d="M3 10.5l9 4 9-4M3 15l9 4 9-4" stroke="#FFFFFF" strokeWidth={1.8} strokeLinejoin="round" />
  </Svg>
);

const GroceriesIcon = () => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
    <Path d="M6 3h12l-1.5 18H7.5L6 3z" stroke="#FFFFFF" strokeWidth={1.8} strokeLinejoin="round" />
    <Path d="M10 3v4M14 3v4M8 8l2-2 2 2" stroke="#FFFFFF" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

const RentIcon = () => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
    <Circle cx="8" cy="8" r="3" stroke="#FFFFFF" strokeWidth={1.8} />
    <Path d="M11 8h7v3h-2v-3" stroke="#FFFFFF" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />
    <Path d="M3 18c2-2 5-3 8-1l7-3c2-1 4 0 4 2v1c0 2-3 3-5 3H7" stroke="#FFFFFF" strokeWidth={1.8} strokeLinecap="round" />
  </Svg>
);

export default function HomeScreen() {
    const [activePeriod, setActivePeriod] = useState("Monthly");
    const [notificationsVisible, setNotificationsVisible] = useState(false);
  return (
    <View className="flex-1 bg-[#00D09E]">
      <StatusBar barStyle="dark-content" backgroundColor="#00D09E" />

      <SafeAreaView edges={["top"]} className="px-6 pt-2 pb-6">
        {/* Greeting and notification */}
        <View className="flex-row justify-between items-start mb-6">
          <View>
            <Text className="text-2xl font-black text-[#093030] tracking-tight">
              Hi, Welcome Back
            </Text>

            <Text className="text-sm font-medium text-[#093030]">
              Good Morning
            </Text>
          </View>

          <TouchableOpacity
            activeOpacity={0.8}
            className="w-12 h-12 bg-white rounded-full items-center justify-center shadow-sm"
            onPress={() => setNotificationsVisible(true)}
          >
            <BellIcon />
          </TouchableOpacity>
        </View>

        {/* Balance and expense */}
        <View className="flex-row items-center mb-6">
          <View className="flex-1 pr-3">
            <View className="flex-row items-center mb-1">
              <UpRightArrowIcon />
              <Text className="text-xs font-semibold text-[#093030] ml-1.5">
                Total Balance
              </Text>
            </View>

            <Text className="text-2xl font-black text-white tracking-tight">
              $7,783.00
            </Text>
          </View>

          <View className="w-[1.5px] h-10 bg-white/40 mr-4" />

          <View className="flex-1 pl-1">
            <View className="flex-row items-center mb-1">
              <DownRightArrowIcon />
              <Text className="text-xs font-semibold text-[#093030] ml-1.5">
                Total Expense
              </Text>
            </View>

            <Text className="text-2xl font-black text-[#0066FF] tracking-tight">
              -$1.187.40
            </Text>
          </View>
        </View>

        {/* Budget progress */}
        <View className="w-full bg-white rounded-full flex-row items-center overflow-hidden h-7 p-0.5 mb-3">
          <View className="bg-[#093030] h-full rounded-full w-[28%] items-center justify-center">
            <Text className="text-white text-xs font-bold">30%</Text>
          </View>

          <View className="flex-1 items-end pr-4">
            <Text className="text-[#093030] text-xs font-bold italic">
              $20,000.00
            </Text>
          </View>
        </View>

        <View className="flex-row items-center pl-1">
          <CheckCircleIcon />
          <Text className="text-xs font-medium text-[#093030] ml-2">
            30% Of Your Expenses, Looks Good.
          </Text>
        </View>
      </SafeAreaView>

      {/* Main content area — we'll build this next */}
      {/* Main content area */}
<ScrollView
  className="flex-1 bg-[#F1FFF3] rounded-t-[46px] px-6 pt-6"
  showsVerticalScrollIndicator={false}
  contentContainerStyle={{ paddingBottom: 30 }}
>

  {/* Savings and Analytics Card */}
  <View className="w-full bg-[#00D09E] rounded-[36px] p-5 flex-row items-center justify-between">

    {/* Savings goal */}
    <View className="items-center justify-center w-[40%]">
      <View className="w-24 h-24 rounded-full border-4 border-white/60 border-t-[#0066FF] border-r-[#0066FF] items-center justify-center mb-2">
        <CarIcon />
      </View>

      <Text className="text-xs font-bold text-[#093030] text-center leading-4">
        Savings{"\n"}On Goals
      </Text>
    </View>

    {/* Divider */}
    <View className="w-[1.5px] h-28 bg-white/40" />

    {/* Weekly statistics */}
    <View className="flex-1 pl-4">

      <View className="flex-row items-center">
        <BanknotesCardIcon />

        <View className="ml-3">
          <Text className="text-[11px] font-semibold text-[#093030]">
            Revenue Last Week
          </Text>

          <Text className="text-base font-extrabold text-[#093030]">
            $4.000.00
          </Text>
        </View>
      </View>

      <View className="w-full h-[1px] bg-white/40 my-3" />

      <View className="flex-row items-center">
        <View className="w-9 items-center justify-center">
          <ForkKnifeIcon />
        </View>

        <View className="ml-3">
          <Text className="text-[11px] font-semibold text-[#093030]">
            Food Last Week
          </Text>

          <Text className="text-base font-extrabold text-[#0066FF]">
            -$100.00
          </Text>
        </View>
      </View>

    </View>
  </View>
  {/* Time Filter */}
<View className="w-full bg-[#DFF7E2] rounded-full p-1.5 flex-row items-center justify-between mt-6">

  {["Daily", "Weekly", "Monthly"].map((period) => {
    const isSelected = activePeriod === period;

    return (
        <TouchableOpacity
        key={period}
        activeOpacity={0.8}
        onPress={() => setActivePeriod(period)}
        style={{
            flex: 1,
            paddingVertical: 12,
            borderRadius: 30,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor:
            isSelected ? "#00D09E" : "transparent",
        }}
        >
        <Text style={{ color: "#093030", fontWeight: "bold" }}>
            {period}
        </Text>
        </TouchableOpacity>
    );
  })}

</View>
{/* Transaction List */}
<View className="mt-6">

  {/* Salary */}
  <View className="flex-row items-center justify-between mb-5">
    <View className="w-14 h-14 bg-[#70A6FF] rounded-full items-center justify-center">
      <SalaryIcon />
    </View>

    <View className="flex-1 ml-4">
      <Text className="text-base font-bold text-[#093030]">
        Salary
      </Text>
      <Text className="text-xs font-semibold text-[#0066FF]">
        18:27 - April 30
      </Text>
    </View>

    <View className="w-[1.5px] h-8 bg-[#00D09E]/40 mx-3" />

    <Text className="text-xs font-semibold text-[#5D6B6B] w-14">
      Monthly
    </Text>

    <View className="w-[1.5px] h-8 bg-[#00D09E]/40 mx-3" />

    <Text className="text-sm font-extrabold text-[#093030]">
      $4.000,00
    </Text>
  </View>

  {/* Groceries */}
  <View className="flex-row items-center justify-between mb-5">
    <View className="w-14 h-14 bg-[#3282B8] rounded-full items-center justify-center">
      <GroceriesIcon />
    </View>

    <View className="flex-1 ml-4">
      <Text className="text-base font-bold text-[#093030]">
        Groceries
      </Text>
      <Text className="text-xs font-semibold text-[#0066FF]">
        17:00 - April 24
      </Text>
    </View>

    <View className="w-[1.5px] h-8 bg-[#00D09E]/40 mx-3" />

    <Text className="text-xs font-semibold text-[#5D6B6B] w-14">
      Pantry
    </Text>

    <View className="w-[1.5px] h-8 bg-[#00D09E]/40 mx-3" />

    <Text className="text-sm font-extrabold text-[#0066FF]">
      -$100,00
    </Text>
  </View>

  {/* Rent */}
  <View className="flex-row items-center justify-between mb-5">
    <View className="w-14 h-14 bg-[#0052FF] rounded-full items-center justify-center">
      <RentIcon />
    </View>

    <View className="flex-1 ml-4">
      <Text className="text-base font-bold text-[#093030]">
        Rent
      </Text>
      <Text className="text-xs font-semibold text-[#0066FF]">
        8:30 - April 15
      </Text>
    </View>

    <View className="w-[1.5px] h-8 bg-[#00D09E]/40 mx-3" />

    <Text className="text-xs font-semibold text-[#5D6B6B] w-14">
      Rent
    </Text>

    <View className="w-[1.5px] h-8 bg-[#00D09E]/40 mx-3" />

    <Text className="text-sm font-extrabold text-[#0066FF]">
      -$674,40
    </Text>
  </View>

</View>

</ScrollView>
      <NotificationDrawer
        visible={notificationsVisible}
        onClose={() => setNotificationsVisible(false)}
      />
    </View>
  );
}
