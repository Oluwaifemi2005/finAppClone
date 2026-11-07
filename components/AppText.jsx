import { Text } from "react-native";
import { FONTS, COLORS } from "../constants/theme";

export default function AppText({
  children,
  weight = "regular",
  color = COLORS.primary,
  size = 14,
  style,
}) {
  return (
    <Text
      style={[
        {
          fontFamily: FONTS[weight],
          fontSize: size,
          color,
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
}