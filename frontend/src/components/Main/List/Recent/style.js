import { StyleSheet } from "react-native";
import colors from "../../../../themes/colors";

export default StyleSheet.create({
  header: {
    paddingBottom: 6,
    paddingHorizontal: "6%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerTitle: {
    fontWeight: "bold",
    fontSize: 32,
  },
  headerTextButton: {
    fontSize: 16,
  },
  item: {
    justifyContent: "space-between",
    paddingHorizontal: 14,
    paddingTop: 16,
    paddingBottom: 20,
    borderRadius: 10,
    width: "100%",
    borderColor: colors.primary,
  },
  container: {
    gap: 14,
    marginHorizontal: "6%",
    borderRadius: 20,
    overflow: "scroll",
  },
  itemTitle: {
    fontWeight: "bold",
    fontSize: 18,
  },
  itemSubtitle: {
    fontSize: 16,
  },
  itemHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  itemHeaderText: {
    color: "#aaa",
    fontSize: 14,
  },
});
