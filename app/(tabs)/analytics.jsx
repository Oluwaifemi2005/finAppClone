import { View, Text, ScrollView, TouchableOpacity, StatusBar, } from "react-native";
import { useState } from "react";
import { ANALYTICS_DATA } from "../../constants/analyticsData";
import Screen from "../../components/Screen";
import Svg, { Path, Rect, Circle } from "react-native-svg";
import NotificationDrawer from "../../components/NotificationDrawer";
import { useRouter } from "expo-router";







function BellIcon() {
  return (
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
}
function AnalyticsChart({ data, labels }) {
return (
  <View style={{ marginTop: 30 }}>
    <View
      style={{
        height: 180,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
      }}
    >
      {data.map((item, index) => (
        <View
          key={labels[index]}
          style={{ alignItems: "center", flex: 1 }}
        >
          <View style={{ flexDirection: "row", alignItems: "flex-end", gap: 3 }}>
            <View
              style={{
                width: 8,
                height: item.income * 1.5,
                backgroundColor: "#00D09E",
                borderRadius: 4,
              }}
            />

            <View
              style={{
                width: 8,
                height: item.expense * 1.5,
                backgroundColor: "#0068FF",
                borderRadius: 4,
              }}
            />
          </View>

          <Text style={{ marginTop: 8, fontSize: 10 }}>
            {labels[index]}
          </Text>
        </View>
      ))}
    </View>
  </View>
);
}

function SearchActionIcon() {
  return (
    <Svg width={16} height={16} viewBox="0 0 24 24" fill="none">
      <Circle cx="11" cy="11" r="7" stroke="#093030" strokeWidth={2.5} />
      <Path
        d="M20 20l-4-4"
        stroke="#093030"
        strokeWidth={2.5}
        strokeLinecap="round"
      />
    </Svg>
  );
}

function CalendarActionIcon() {
  return (
    <Svg width={16} height={16} viewBox="0 0 24 24" fill="none">
      <Rect x="3" y="4" width="18" height="17" rx="3" stroke="#093030" strokeWidth={2} />
      <Path
        d="M3 9h18M7 2v4M17 2v4"
        stroke="#093030"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </Svg>
  );
}
export default function AnalyticsScreen() {
    const router = useRouter();
  const [activeTab, setActiveTab] = useState("Monthly");
  const [notificationsVisible, setNotificationsVisible] = useState(false);

  const selectedData = ANALYTICS_DATA[activeTab];

        return (
        <Screen style={{ backgroundColor: "#00D09E" }}>
            <StatusBar barStyle="dark-content" backgroundColor="#00D09E" />

            {/* Header */}
            <View style={{ paddingHorizontal: 24, paddingTop: 10, paddingBottom: 24 }}>
            <View
                style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 24,
                }}
            >
                <Text style={{ fontSize: 24, fontWeight: "900", color: "#093030" }}>
                Analysis
                </Text>

                <TouchableOpacity
                onPress={() => setNotificationsVisible(true)}
                style={{
                    width: 44,
                    height: 44,
                    backgroundColor: "#FFFFFF",
                    borderRadius: 22,
                    alignItems: "center",
                    justifyContent: "center",
                }}
                >
                <BellIcon />
                </TouchableOpacity>
            </View>

            <View style={{ flexDirection: "row", marginBottom: 20 }}>
                <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 13, color: "#093030" }}>
                    ↗ Total Balance
                </Text>
                <Text style={{ fontSize: 26, fontWeight: "900", color: "#FFFFFF" }}>
                    $7,783.00
                </Text>
                </View>

                <View style={{ width: 1, backgroundColor: "#FFFFFF66", marginRight: 16 }} />

                <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 13, color: "#093030" }}>
                    ↘ Total Expense
                </Text>
                <Text style={{ fontSize: 26, fontWeight: "900", color: "#0068FF" }}>
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
                marginBottom: 12,
                }}
            >
                <View
                style={{
                    width: "30%",
                    height: "100%",
                    backgroundColor: "#093030",
                    borderRadius: 20,
                    justifyContent: "center",
                    alignItems: "center",
                }}
                >
                <Text style={{ color: "#FFFFFF", fontSize: 11, fontWeight: "bold" }}>
                    30%
                </Text>
                </View>
            </View>

            <Text style={{ fontSize: 12, color: "#093030" }}>
                ✓ 30% Of Your Expenses, Looks Good.
            </Text>
            </View>

            {/* Main Content */}
            <View
            style={{
                flex: 1,
                backgroundColor: "#F1FFF3",
                borderTopLeftRadius: 46,
                borderTopRightRadius: 46,
                padding: 24,
                marginBottom: -40
            }}
            >
            {/* We'll add the analytics content here next */}
            <ScrollView showsVerticalScrollIndicator={false}>
                <View
                    style={{
                    flexDirection: "row",
                    backgroundColor: "#DFF7E2",
                    borderRadius: 30,
                    padding: 5,
                    justifyContent: "space-between",
                    marginBottom: 24,
                    }}
                >
                    {["Daily", "Weekly", "Monthly", "Year"].map((period) => {
                    const isSelected = activeTab === period;

                    return (
                        <TouchableOpacity
                        key={period}
                        onPress={() => setActiveTab(period)}
                        style={{
                            flex: 1,
                            paddingVertical: 12,
                            borderRadius: 25,
                            alignItems: "center",
                            backgroundColor: isSelected ? "#00D09E" : "transparent",
                        }}
                        >
                        <Text
                            style={{
                            color: "#093030",
                            fontWeight: "bold",
                            fontSize: 13,
                            }}
                        >
                            {period}
                        </Text>
                        </TouchableOpacity>
                    );
                    })}
                </View>
                <View
                    style={{
                        backgroundColor: "#DFF7E2",
                        borderRadius: 30,
                        padding: 20,
                        marginBottom: 24,
                    }}
                    >
                    <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: 15,
                    }}
                    >
                    <Text style={{ fontSize: 16, fontWeight: "bold", color: "#093030" }}>
                        Income & Expenses
                    </Text>

                    <View style={{ flexDirection: "row", gap: 10 }}>
                        <TouchableOpacity
                        onPress={() => router.push("/search")}
                        style={{
                            width: 36,
                            height: 36,
                            backgroundColor: "#00D09E",
                            borderRadius: 12,
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                        >
                        <SearchActionIcon />
                        </TouchableOpacity>

                        <TouchableOpacity
                        style={{
                            width: 36,
                            height: 36,
                            backgroundColor: "#00D09E",
                            borderRadius: 12,
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                        >
                        <CalendarActionIcon />
                        </TouchableOpacity>
                    </View>
                    </View>

                    <AnalyticsChart
                        data={selectedData.chart}
                        labels={selectedData.labels}
                    />
                    </View>

                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-around",
                            alignItems: "center",
                            marginBottom: 32,
                        }}
                        >
                        {/* Income */}
                        <View style={{ alignItems: "center" }}>
                            <Text style={{ fontSize: 14, fontWeight: "bold", color: "#093030" }}>
                            ↑ Income
                            </Text>

                            <Text style={{ fontSize: 20, fontWeight: "900", color: "#093030" }}>
                            ${selectedData.income}
                            </Text>
                        </View>

                        {/* Expense */}
                        <View style={{ alignItems: "center" }}>
                            <Text style={{ fontSize: 14, fontWeight: "bold", color: "#093030" }}>
                            ↓ Expense
                            </Text>

                            <Text style={{ fontSize: 20, fontWeight: "900", color: "#0068FF" }}>
                            ${selectedData.expense}
                            </Text>
                        </View>
                        </View>
                        <View style={{ marginBottom: 20 }}>
                            <Text
                                style={{
                                fontSize: 18,
                                fontWeight: "900",
                                color: "#093030",
                                }}
                            >
                                My Targets
                            </Text>
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