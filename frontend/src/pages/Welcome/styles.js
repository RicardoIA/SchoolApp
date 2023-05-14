import { StyleSheet } from "react-native";
import colors from "../../themes/colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroud,
  },
  containerLogo: {
    flex: 1.2,
    alignItems: "center",
    justifyContent: "center",
  },
  imageLog: {
    width: "50%",
  },
  titleLogo: {
    color: "#fff",
    fontSize: 36,
    fontWeight: "bold",
    marginTop: 10,
  },
  containerForm: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: "9%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 28,
    marginBottom: 12,
  },
  subtitle: {
    color: "#a1a1a1",
    fontSize: 18,
  },
  footer: {
    backgroundColor: "#ddd",
    paddingHorizontal: "9%",
    paddingVertical: 20,
  },
  footerText: {
    color: "#555",
    fontSize: 18,
    width: "100%",
  },
  signUpText: {
    fontWeight: "bold",
    textDecorationLine: "underline",
    color: colors.primary
  },
});
