
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../constants/theme";

export default function Screen({ children, style }) {
  return (
    <SafeAreaView
      edges={["top", "bottom"]}
      style={[
        {
          flex: 1,
          backgroundColor: COLORS.white,
        },
        style,
      ]}
    >
      {children}
    </SafeAreaView>
  );
}
