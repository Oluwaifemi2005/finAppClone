
import { View, Text, TouchableOpacity } from "react-native";
import Svg, { Path, Circle, Rect } from "react-native-svg";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const TabIcon = ({ name, color }) => {
  const common = {
    stroke: color,
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none",
  };

  switch (name) {
    case "index":
      return (
        <Svg width={24} height={24} viewBox="0 0 24 24">
          <Path {...common} d="M3 10.5L12 3l9 7.5V21H3V10.5Z" />
          <Path {...common} d="M9 21v-7h6v7" />
        </Svg>
      );

    case "analytics":
      return (
        <Svg width={24} height={24} viewBox="0 0 24 24">
          <Path {...common} d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
        </Svg>
      );

    case "category":
      return (
        <Svg width={24} height={24} viewBox="0 0 24 24">
          <Rect {...common} x="3" y="4" width="18" height="17" rx="2" />
          <Path {...common} d="M7 2v4M17 2v4M3 9h18M8 13h3M8 17h8" />
        </Svg>
      );

    case "transactions":
      return (
        <Svg width={24} height={24} viewBox="0 0 24 24">
          <Path {...common} d="M7 7h13l-4-4M20 7l-4 4M17 17H4l4 4M4 17l4-4" />
        </Svg>
      );

    case "profile":
      return (
        <Svg width={24} height={24} viewBox="0 0 24 24">
          <Circle {...common} cx="12" cy="8" r="4" />
          <Path {...common} d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7" />
        </Svg>
      );

    default:
      return null;
  }
};

const TAB_ITEMS = [
  { name: "index", label: "Home" },
  { name: "analytics", label: "Chart" },
  { name: "transactions", label: "Stack" },
  { name: "category", label: "category" },
  { name: "profile", label: "Profile" },
];

export default function CustomTabBar({ state, navigation }) {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "#DFF7E2",
        paddingTop: 12,
        paddingBottom: Math.max(insets.bottom, 12),
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
      }}
    >
      {TAB_ITEMS.map((tab, index) => {
        const isActive = state.index === index;
        const color = isActive ? "#093030" : "#8A9A91";

        return (
          <TouchableOpacity
            key={tab.name}
            activeOpacity={0.8}
            onPress={() => navigation.navigate(tab.name)}
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                width: 42,
                height: 42,
                borderRadius: 21,
                backgroundColor: isActive ? "#00D09E" : "transparent",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TabIcon name={tab.name} color={color} />
            </View>

            <Text
              style={{
                fontSize: 10,
                fontWeight: isActive ? "700" : "500",
                color,
                marginTop: 3,
              }}
            >
              {tab.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
