
import { Tabs } from "expo-router";
import CustomTabBar from "../../components/CustomTabBar";

export default function TabLayout() {
  return (
    <Tabs
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="analytics" options={{ title: "Analytics" }} />
      <Tabs.Screen name="transactions" options={{ title: "Transactions" }} />
      <Tabs.Screen name="category" options={{ title: "Category" }} />
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
      <Tabs.Screen name="food" options={{ href: null }} />
      <Tabs.Screen name="add-expenses" options={{ href: null }} />
      <Tabs.Screen name="transport" options={{ href: null }} />
      <Tabs.Screen name="groceries" options={{ href: null }} />
      <Tabs.Screen name="edit-profile" options={{ href: null }} />
      <Tabs.Screen name="security" options={{ href: null }} />
    </Tabs>
  );
}
