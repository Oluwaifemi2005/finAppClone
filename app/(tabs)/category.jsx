import { View, Text, StatusBar } from "react-native";
import Svg, { Path, Circle, Rect } from "react-native-svg";
import Screen from "../../components/Screen";
import { COLORS } from "../../constants/theme";
import { TouchableOpacity } from "react-native";
import NotificationDrawer from "../../components/NotificationDrawer";
import { useState } from "react";
import { useRouter } from "expo-router";

const SummaryIcon = ({ type }) => (
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
    {type === "balance" ? (
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



const CategoryIcon = ({ type }) => {
  const common = {
    stroke: "#FFFFFF",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none",
  };

  switch (type) {
    case "Food":
      return (
        <Svg width={36} height={36} viewBox="0 0 24 32">
          <Path {...common} d="M5 2v10a3 3 0 0 0 3 3v14M8 2v10M11 2v10a3 3 0 0 1-3 3M19 2v27M15 2v6a4 4 0 0 0 4 4" />
        </Svg>
      );

    case "Transport":
      return (
        <Svg width={36} height={36} viewBox="0 0 24 24">
          <Rect {...common} x="4" y="3" width="16" height="15" rx="3" />
          <Path {...common} d="M4 9h16M4 14h16M6 18v2M18 18v2" />
          <Circle cx="8" cy="16" r="1.2" fill="#FFFFFF" />
          <Circle cx="16" cy="16" r="1.2" fill="#FFFFFF" />
        </Svg>
      );

    case "Medicine":
      return (
        <Svg width={36} height={36} viewBox="0 0 24 24">
          <Path {...common} d="M10.5 3.5a4.95 4.95 0 0 1 7 7l-9.5 9.5a3.5 3.5 0 1 1-5-5l9.5-9.5zM8.5 7.5l7 7" />
        </Svg>
      );

    case "Groceries":
      return (
        <Svg width={36} height={36} viewBox="0 0 24 24">
          <Path {...common} d="M6 3h12l-1.5 18H7.5L6 3zM10 3v4M14 3v4M8 8l2-2 2 2" />
        </Svg>
      );

    case "Rent":
      return (
        <Svg width={36} height={36} viewBox="0 0 24 24">
          <Circle {...common} cx="8" cy="8" r="3" />
          <Path {...common} d="M11 8h7v3h-2v-3M3 18c2-2 5-3 8-1l7-3c2-1 4 0 4 2v1c0 2-3 3-5 3H7" />
        </Svg>
      );

    case "Gifts":
      return (
        <Svg width={36} height={36} viewBox="0 0 24 24">
          <Rect {...common} x="3" y="8" width="18" height="13" rx="2" />
          <Path {...common} d="M12 8v13M3 12h18M12 8C12 5.5 9 3 7.5 4.5S9 8 12 8zM12 8c0-2.5 3-5 4.5-3.5S15 8 12 8z" />
        </Svg>
      );

    case "Savings":
      return (
        <Svg width={36} height={36} viewBox="0 0 24 24">
          <Path {...common} d="M3 6c0 2 4.5 3 9 3s9-1 9-3M3 6v6c0 2 4.5 3 9 3s9-1 9-3V6M3 12v6c0 2 4.5 3 9 3s9-1 9-3v-6" />
          <Circle {...common} cx="12" cy="13" r="2.5" />
        </Svg>
      );

    case "Entertainment":
      return (
        <Svg width={36} height={36} viewBox="0 0 24 24">
          <Path {...common} d="M4 7l16-3M6 11l14-3M7 16l14-3" />
          <Rect {...common} x="3" y="5" width="18" height="15" rx="3" />
        </Svg>
      );

    default:
      return (
        <Svg width={36} height={36} viewBox="0 0 24 24">
          <Path {...common} strokeWidth={2.5} d="M12 5v14M5 12h14" />
        </Svg>
      );
  }
};

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



export default function CategoryScreen() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState("Food");
  const [notificationsVisible, setNotificationsVisible] = useState(false);

  return (
    <Screen style={{ backgroundColor: COLORS.green }}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.green} />

      {/* Header */}
      <View style={{ paddingHorizontal: 24, paddingTop: 10, paddingBottom: 24 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 28,
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
          Categories
        </Text>

        <TouchableOpacity
          onPress={() => setNotificationsVisible(true)}
          activeOpacity={0.8}
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
        <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 22 }}>
          <View style={{ flex: 1 }}>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 6, marginBottom: 5 }}>
              <SummaryIcon type="balance" />
              <Text style={{ fontSize: 12, fontWeight: "600", color: COLORS.darkGreen }}>
                Total Balance
              </Text>
            </View>

            <Text style={{ fontSize: 25, fontWeight: "900", color: COLORS.white }}>
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
            <View style={{ flexDirection: "row", alignItems: "center", gap: 6, marginBottom: 5 }}>
              <SummaryIcon type="expense" />
              <Text style={{ fontSize: 12, fontWeight: "600", color: COLORS.darkGreen }}>
                Total Expense
              </Text>
            </View>

            <Text style={{ fontSize: 25, fontWeight: "900", color: COLORS.blue }}>
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
            <Text style={{ color: COLORS.white, fontSize: 11, fontWeight: "700" }}>
              30%
            </Text>
          </View>

          <View style={{ flex: 1, justifyContent: "center", alignItems: "flex-end", paddingRight: 14 }}>
            <Text style={{ color: COLORS.darkGreen, fontSize: 11, fontWeight: "700", fontStyle: "italic" }}>
              $20,000.00
            </Text>
          </View>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center", gap: 8, paddingLeft: 4 }}>
          <CheckIcon />
          <Text style={{ fontSize: 12, fontWeight: "500", color: COLORS.darkGreen }}>
            30% Of Your Expenses, Looks Good.
          </Text>
        </View>
      </View>

      {/* Category content will go here */}

      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.lightGreen,
          borderTopLeftRadius: 46,
          borderTopRightRadius: 46,
          paddingHorizontal: 24,
          paddingTop: 28,
          marginBottom: -40
        }}
      >
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {[
            { name: "Food"},
            { name: "Transport" },
            { name: "Medicine" },
            { name: "Groceries" },
            { name: "Rent" },
            { name: "Gifts" },
            { name: "Savings" },
            { name: "Entertainment" },
            { name: "More" },
          ].map((category) => (
            <TouchableOpacity
              key={category.name}
              activeOpacity={0.8}
              onPress={() => {
                setActiveCategory(category.name)
                if (category.name === "Food") {
                  router.push("/food");
                }else if (category.name === "Transport") {
                  router.push("/transport");
                }
                else if (category.name === "Groceries") {
                  router.push("/groceries");
                }
              } }
              style={{
                width: "30%",
                alignItems: "center",
                marginBottom: 24,
              }}
            >
              <View
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 26,
                  backgroundColor: activeCategory === category.name ? "#0066FF" : "#70A6FF",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 9,
                }}
              >
                <CategoryIcon type={category.name} />
              </View>

              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "700",
                  color: COLORS.darkGreen,
                }}
              >
                {category.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <NotificationDrawer
        visible={notificationsVisible}
        onClose={() => setNotificationsVisible(false)}
      />

    </Screen>
  );
}
