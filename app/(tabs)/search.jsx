
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Modal,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useRouter } from "expo-router";
import Svg, { Path, Circle, Rect } from "react-native-svg";

import NotificationDrawer from "../../components/NotificationDrawer";

// ---------------- MOCK TRANSACTIONS ----------------

const TRANSACTIONS = [
  {
    id: "1",
    title: "Dinner",
    category: "Food",
    type: "Expense",
    amount: 26,
    date: new Date(2023, 3, 30),
    time: "18:27",
  },
  {
    id: "2",
    title: "Salary",
    category: "Salary",
    type: "Income",
    amount: 2500,
    date: new Date(2023, 3, 30),
    time: "09:00",
  },
  {
    id: "3",
    title: "Groceries",
    category: "Food",
    type: "Expense",
    amount: 80,
    date: new Date(2023, 3, 29),
    time: "14:30",
  },
  {
    id: "4",
    title: "Transport",
    category: "Transport",
    type: "Expense",
    amount: 15,
    date: new Date(2023, 3, 28),
    time: "08:15",
  },
];

// ---------------- ICONS ----------------

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

const ChevronDownIcon = () => (
  <Svg width={20} height={20} viewBox="0 0 24 24" fill="none">
    <Path
      d="M6 9l6 6 6-6"
      stroke="#00D09E"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const CalendarBadgeIcon = () => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
    <Rect x="2" y="3" width="20" height="18" rx="4" fill="#00D09E" />
    <Path d="M2 8h20" stroke="#FFFFFF" strokeWidth={1.5} />
    <Path
      d="M7 1v4M17 1v4"
      stroke="#FFFFFF"
      strokeWidth={2}
      strokeLinecap="round"
    />
    {[7, 12, 17].map((x) =>
      [12, 16].map((y) => (
        <Circle
          key={`${x}-${y}`}
          cx={x}
          cy={y}
          r="1"
          fill="#FFFFFF"
        />
      ))
    )}
  </Svg>
);

const DinnerForkKnifeIcon = () => (
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

// ---------------- RADIO BUTTON ----------------

function RadioButton({ label, selected, onSelect }) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onSelect}
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginRight: 30,
      }}
    >
      <View
        style={{
          width: 20,
          height: 20,
          borderRadius: 10,
          borderWidth: 2,
          borderColor: "#00D09E",
          alignItems: "center",
          justifyContent: "center",
          marginRight: 9,
        }}
      >
        {selected && (
          <View
            style={{
              width: 10,
              height: 10,
              borderRadius: 5,
              backgroundColor: "#00D09E",
            }}
          />
        )}
      </View>

      <Text
        style={{
          fontSize: 15,
          fontWeight: "bold",
          color: "#093030",
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}

// ---------------- SEARCH SCREEN ----------------

export default function SearchScreen() {
  const router = useRouter();

  const [searchQuery, setSearchQuery] = useState("");
  const [reportType, setReportType] = useState("Expense");

  const [selectedCategory, setSelectedCategory] = useState("");
  const [categoryModalVisible, setCategoryModalVisible] = useState(false);

  const [selectedDate, setSelectedDate] = useState(
    new Date(2023, 3, 30)
  );
  const [datePickerVisible, setDatePickerVisible] = useState(false);

  const [searchResults, setSearchResults] = useState([
    TRANSACTIONS[0],
  ]);

  const [hasSearched, setHasSearched] = useState(false);
  const [notificationsVisible, setNotificationsVisible] = useState(false);

  const categories = [
    "Food",
    "Transport",
    "Shopping",
    "Bills",
    "Entertainment",
    "Health",
    "Salary",
    "Other",
  ];

  const formattedDate = selectedDate.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  // ---------------- SEARCH FILTER ----------------

  const handleSearch = () => {
    const results = TRANSACTIONS.filter((transaction) => {
      const matchesQuery = transaction.title
        .toLowerCase()
        .includes(searchQuery.trim().toLowerCase());

      const matchesCategory =
        !selectedCategory ||
        transaction.category === selectedCategory;

      const matchesType = transaction.type === reportType;

      const matchesDate =
        transaction.date.toDateString() === selectedDate.toDateString();

      return (
        matchesQuery &&
        matchesCategory &&
        matchesType &&
        matchesDate
      );
    });

    setSearchResults(results);
    setHasSearched(true);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#00D09E" }}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#00D09E"
      />

      {/* HEADER */}

      <SafeAreaView
        edges={["top"]}
        style={{
          paddingHorizontal: 24,
          paddingTop: 8,
          paddingBottom: 24,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 20,
          }}
        >
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => router.replace("/(tabs)/analytics")}
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
              letterSpacing: -0.5,
            }}
          >
            Search
          </Text>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setNotificationsVisible(true)}
            style={{
              width: 44,
              height: 44,
              backgroundColor: "#FFFFFF",
              borderRadius: 22,
              alignItems: "center",
              justifyContent: "center",
              elevation: 2,
            }}
          >
            <BellIcon />
          </TouchableOpacity>
        </View>

        {/* SEARCH INPUT */}

        <View
          style={{
            width: "100%",
            backgroundColor: "#F1FFF3",
            borderRadius: 30,
            paddingHorizontal: 20,
            paddingVertical: 13,
          }}
        >
          <TextInput
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholder="Search..."
            placeholderTextColor="#7D8A8A"
            style={{
              color: "#093030",
              fontSize: 14,
              padding: 0,
            }}
          />
        </View>
      </SafeAreaView>

      {/* MAIN CONTENT */}

      <View
        style={{
          flex: 1,
          backgroundColor: "#F1FFF3",
          borderTopLeftRadius: 46,
          borderTopRightRadius: 46,
          paddingHorizontal: 24,
          paddingTop: 30,
        }}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 35 }}
        >
          {/* CATEGORIES */}

          <View style={{ marginBottom: 24 }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                color: "#093030",
                marginBottom: 10,
              }}
            >
              Categories
            </Text>

            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setCategoryModalVisible(true)}
              style={{
                width: "100%",
                backgroundColor: "#DFF7E2",
                borderRadius: 24,
                paddingHorizontal: 20,
                paddingVertical: 17,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  color: selectedCategory ? "#093030" : "#7D8A8A",
                  fontSize: 14,
                  fontWeight: "500",
                }}
              >
                {selectedCategory || "Select the category"}
              </Text>

              <ChevronDownIcon />
            </TouchableOpacity>
          </View>

          {/* DATE */}

          <View style={{ marginBottom: 24 }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                color: "#093030",
                marginBottom: 10,
              }}
            >
              Date
            </Text>

            <View
              style={{
                width: "100%",
                backgroundColor: "#DFF7E2",
                borderRadius: 24,
                paddingHorizontal: 20,
                paddingVertical: 14,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  color: "#093030",
                  fontSize: 15,
                  fontWeight: "500",
                }}
              >
                {formattedDate}
              </Text>

              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => setDatePickerVisible(true)}
              >
                <CalendarBadgeIcon />
              </TouchableOpacity>
            </View>
          </View>

          {/* DATE PICKER */}

          {datePickerVisible && (
            <DateTimePicker
              value={selectedDate}
              mode="date"
              display="default"
              onChange={(event, date) => {
                setDatePickerVisible(false);

                if (date) {
                  setSelectedDate(date);
                }
              }}
            />
          )}

          {/* REPORT */}

          <View style={{ marginBottom: 30 }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                color: "#093030",
                marginBottom: 14,
              }}
            >
              Report
            </Text>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <RadioButton
                label="Income"
                selected={reportType === "Income"}
                onSelect={() => setReportType("Income")}
              />

              <RadioButton
                label="Expense"
                selected={reportType === "Expense"}
                onSelect={() => setReportType("Expense")}
              />
            </View>
          </View>

          {/* SEARCH BUTTON */}

          <View
            style={{
              alignItems: "center",
              marginBottom: 32,
            }}
          >
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={handleSearch}
              style={{
                width: 192,
                backgroundColor: "#00D09E",
                paddingVertical: 14,
                borderRadius: 30,
                alignItems: "center",
                justifyContent: "center",
                elevation: 2,
              }}
            >
              <Text
                style={{
                  color: "#093030",
                  fontSize: 18,
                  fontWeight: "bold",
                }}
              >
                Search
              </Text>
            </TouchableOpacity>
          </View>

          {/* SEARCH RESULTS */}

          {searchResults.length > 0 ? (
            searchResults.map((transaction) => (
              <View
                key={transaction.id}
                style={{
                  width: "100%",
                  backgroundColor: "#DFF7E2",
                  borderRadius: 24,
                  padding: 16,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: 12,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    flex: 1,
                  }}
                >
                  <View
                    style={{
                      width: 56,
                      height: 56,
                      backgroundColor: "#70A6FF",
                      borderRadius: 17,
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: 13,
                    }}
                  >
                    <DinnerForkKnifeIcon />
                  </View>

                  <View style={{ flex: 1 }}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: "bold",
                        color: "#093030",
                      }}
                    >
                      {transaction.title}
                    </Text>

                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: "600",
                        color: "#0066FF",
                        marginTop: 4,
                      }}
                    >
                      {transaction.time} -{" "}
                      {transaction.date.toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                      })}
                    </Text>
                  </View>
                </View>

                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "900",
                    color: "#0066FF",
                    marginLeft: 8,
                  }}
                >
                  {transaction.type === "Expense" ? "-" : "+"}$
                  {transaction.amount.toFixed(2)}
                </Text>
              </View>
            ))
          ) : (
            <View style={{ alignItems: "center", paddingVertical: 25 }}>
              <Text
                style={{
                  color: "#7D8A8A",
                  fontSize: 14,
                  textAlign: "center",
                }}
              >
                {hasSearched
                  ? "No transactions found. Try changing your filters."
                  : "Your search results will appear here."}
              </Text>
            </View>
          )}
        </ScrollView>
      </View>

      {/* CATEGORY MODAL */}

      <Modal
        visible={categoryModalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setCategoryModalVisible(false)}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(0,0,0,0.4)",
            justifyContent: "center",
            paddingHorizontal: 25,
          }}
        >
          <View
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: 25,
              padding: 22,
            }}
          >
            <Text
              style={{
                fontSize: 19,
                fontWeight: "bold",
                color: "#093030",
                marginBottom: 15,
              }}
            >
              Select Category
            </Text>

            <TouchableOpacity
              onPress={() => {
                setSelectedCategory("");
                setCategoryModalVisible(false);
              }}
              style={{ paddingVertical: 12 }}
            >
              <Text style={{ color: "#0068FF", fontSize: 15 }}>
                All Categories
              </Text>
            </TouchableOpacity>

            {categories.map((category) => (
              <TouchableOpacity
                key={category}
                onPress={() => {
                  setSelectedCategory(category);
                  setCategoryModalVisible(false);
                }}
                style={{
                  paddingVertical: 12,
                  borderTopWidth: 1,
                  borderTopColor: "#F1F1F1",
                }}
              >
                <Text
                  style={{
                    color: "#093030",
                    fontSize: 15,
                    fontWeight:
                      selectedCategory === category ? "bold" : "normal",
                  }}
                >
                  {selectedCategory === category ? "✓  " : ""}
                  {category}
                </Text>
              </TouchableOpacity>
            ))}

            <TouchableOpacity
              onPress={() => setCategoryModalVisible(false)}
              style={{
                marginTop: 15,
                alignItems: "center",
              }}
            >
              <Text style={{ color: "#0068FF", fontWeight: "bold" }}>
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* NOTIFICATION DRAWER */}

      <NotificationDrawer
        visible={notificationsVisible}
        onClose={() => setNotificationsVisible(false)}
      />
    </View>
  );
}
