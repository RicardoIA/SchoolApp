import { StyleSheet } from "react-native";
import colors from "../../../../themes/colors";

export default StyleSheet.create({
  container: {
    gap: 14,
    marginVertical: 10,
    paddingVertical: 20,
    marginHorizontal: "2%",
    borderRadius: 20,
  },
  item: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderRadius: 10,
    width: 240,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    height: 42,
  },
  subtitle: {
    fontSize: 16,
  },
});
