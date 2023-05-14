import * as React from "react";
import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button, useTheme } from "react-native-paper";
import * as Animatable from "react-native-animatable";

// Components
import ButtonSubmit from "../../components/Buttons/Submit";

import styles from "./styles";

export default function Welcome() {
  const navigation = useNavigation();
  const { theme } = useTheme();

  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Animatable.Image
          animation="flipInY"
          source={require("../../assets/logo.png")}
          resizeMode="contain"
          style={styles.imageLogo}
        />
        <Text style={styles.titleLogo}>Virtual School</Text>
      </View>
      <Animatable.View
        delay={600}
        animation="fadeInUp"
        style={styles.containerForm}
      >
        <Text style={styles.title}>
          Desbrave o mundo do conhecimento e alcance o sucesso acadêmico!
        </Text>
        <Text style={styles.subtitle}>Faça o login para começar</Text>
        <View style={{ marginTop: 50 }}>
          <ButtonSubmit
            onPress={() => navigation.navigate("Login")}
            label="Acessar"
          />
        </View>
      </Animatable.View>
      <Animatable.View delay={600} animation="fadeInUp" style={styles.footer}>
        <Text style={styles.footerText}>
          Caso não tenha cadastro{" "}
          <Text
            style={styles.signUpText}
            onPress={() => navigation.navigate("Login")}
          >
            Clique Aqui!
          </Text>
        </Text>
      </Animatable.View>
    </View>
  );
}

//const theme = useTheme();
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: theme.primary,
//   },
//   containerLogo: {
//     flex: 1.2,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   imageLog: {
//     width: "50%",
//   },
//   titleLogo: {
//     color: "#fff",
//     fontSize: 36,
//     fontWeight: "bold",
//     marginTop: 10,
//   },
//   containerForm: {
//     flex: 1,
//     backgroundColor: "#fff",
//     borderTopLeftRadius: 25,
//     borderTopRightRadius: 25,
//     paddingHorizontal: "9%",
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginTop: 28,
//     marginBottom: 12,
//   },
//   subtitle: {
//     color: "#a1a1a1",
//     fontSize: 18,
//   },
//   loginButton: {
//     marginTop: 50,
//     paddingVertical: 2,
//     borderRadius: 50,
//   },
//   loginText: {
//     fontSize: 18,
//   },
//   footer: {
//     backgroundColor: "#ddd",
//     paddingHorizontal: "9%",
//     paddingVertical: 20,
//   },
//   footerText: {
//     color: "#555",
//     fontSize: 18,
//     width: "100%",
//   },
//   signUpText: {
//     fontWeight: "bold",
//     textDecorationLine: "underline",
//   },
// });
