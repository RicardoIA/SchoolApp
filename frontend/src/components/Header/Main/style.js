import { StyleSheet } from "react-native";
import colors from "../../../themes/colors";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: "6%",
    borderBottomStartRadius: 15,
    borderBottomEndRadius: 15,
    backgroundColor: colors.backgroud,
    paddingTop: 10,
    paddingBottom: 20,
  },
  title: {
    alignSelf: "flex-start",
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
  },
  subtitle: {
    color: "#ddd",
    fontSize: 18,
  },
  avatarIcon: {
    borderRadius: 50,
    borderStyle: "solid",
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
  },
});
