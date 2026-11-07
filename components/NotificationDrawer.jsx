
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Modal,
  Pressable,
} from "react-native";
import Svg, { Path, Circle } from "react-native-svg";

const NotificationIcon = ({ type }) => {
  const common = {
    stroke: "#093030",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none",
  };

  return (
    <Svg width={22} height={22} viewBox="0 0 24 24">
      {type === "star" ? (
        <Path
          {...common}
          d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
        />
      ) : type === "money" ? (
        <Path
          {...common}
          strokeWidth={2.5}
          d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
        />
      ) : type === "trend" ? (
        <Path {...common} strokeWidth={2.5} d="M7 7l10 10M17 7v10H7" />
      ) : (
        <Path
          {...common}
          d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0"
        />
      )}
    </Svg>
  );
};

const notifications = [
  {
    section: "Today",
    items: [
      {
        type: "bell",
        title: "Reminder!",
        message: "Set up your automatic savings to meet your savings goal...",
        time: "17:00 - April 24",
      },
      {
        type: "star",
        title: "New Update",
        message: "Set up your automatic savings to meet your savings goal...",
        time: "17:00 - April 24",
      },
    ],
  },
  {
    section: "Yesterday",
    items: [
      {
        type: "money",
        title: "Transactions",
        message: "A new transaction has been registered",
        detail: "Groceries | Pantry | -$100,00",
        time: "17:00 - April 24",
      },
      {
        type: "bell",
        title: "Reminder!",
        message: "Set up your automatic savings to meet your savings goal...",
        time: "17:00 - April 24",
      },
    ],
  },
  {
    section: "This Weekend",
    items: [
      {
        type: "trend",
        title: "Expense Record",
        message: "We recommend that you be more attentive to your finances.",
        time: "17:00 - April 24",
      },
      {
        type: "money",
        title: "Transactions",
        message: "A new transaction has been registered",
        detail: "Food | Dinner | -$70,40",
      },
    ],
  },
];

function NotificationItem({ item }) {
  return (
    <View
      style={{
        paddingVertical: 14,
        borderBottomWidth: 1,
        borderBottomColor: "rgba(0,208,158,0.5)",
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
        <View
          style={{
            width: 48,
            height: 48,
            borderRadius: 16,
            backgroundColor: "#00D09E",
            alignItems: "center",
            justifyContent: "center",
            marginRight: 12,
          }}
        >
          <NotificationIcon type={item.type} />
        </View>

        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 16, fontWeight: "bold", color: "#093030" }}>
            {item.title}
          </Text>

          <Text
            style={{
              fontSize: 12,
              color: "#5D6B6B",
              marginTop: 3,
              lineHeight: 17,
            }}
          >
            {item.message}
          </Text>

          {item.detail && (
            <Text
              style={{
                fontSize: 12,
                fontWeight: "bold",
                color: "#0066FF",
                marginTop: 3,
              }}
            >
              {item.detail}
            </Text>
          )}
        </View>
      </View>

      {item.time && (
        <Text
          style={{
            textAlign: "right",
            fontSize: 11,
            fontWeight: "600",
            color: "#0066FF",
            marginTop: 5,
          }}
        >
          {item.time}
        </Text>
      )}
    </View>
  );
}

export default function NotificationDrawer({ visible, onClose }) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
      statusBarTranslucent
    >
      <View style={{ flex: 1, flexDirection: "row" }}>
        {/* Dark background */}
        <Pressable
          onPress={onClose}
          style={{
            flex: 1,
            backgroundColor: "rgba(0,0,0,0.4)",
          }}
        />

        {/* Notification panel */}
        <View
          style={{
            width: "88%",
            height: "100%",
            backgroundColor: "#F1FFF3",
            borderTopLeftRadius: 36,
            borderBottomLeftRadius: 36,
            overflow: "hidden",
          }}
        >
          {/* Drawer header */}
          <View
            style={{
              backgroundColor: "#00D09E",
              paddingTop: 60,
              paddingBottom: 24,
              paddingHorizontal: 24,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 23, fontWeight: "900", color: "#093030" }}>
              Notification
            </Text>

            <TouchableOpacity
              onPress={onClose}
              activeOpacity={0.7}
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                backgroundColor: "white",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ fontSize: 22, color: "#093030" }}>×</Text>
            </TouchableOpacity>
          </View>

          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 24, paddingBottom: 30 }}
          >
            {notifications.map((section) => (
              <View key={section.section} style={{ marginTop: 22 }}>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "600",
                    color: "#093030",
                    marginBottom: 4,
                  }}
                >
                  {section.section}
                </Text>

                {section.items.map((item, index) => (
                  <NotificationItem
                    key={`${section.section}-${index}`}
                    item={item}
                  />
                ))}
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}
