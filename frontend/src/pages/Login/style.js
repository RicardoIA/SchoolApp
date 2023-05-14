import { StyleSheet } from "react-native";
import colors from "../../themes/colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  containerForm: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: "9%",
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    width: "100%",
    fontSize: 20,
    marginVertical: 4,
  },

  textForget: {
    marginTop: 10,
    alignSelf: "flex-end",
    color: colors.primary,
    fontWeight: "bold",
    fontSize: 18,
  },
});
