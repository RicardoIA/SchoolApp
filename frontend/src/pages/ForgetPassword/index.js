import * as React from "react";
import { Text, View, TouchableWithoutFeedback, Keyboard } from "react-native";
import { TextInput } from "react-native-paper";
import * as Animatable from "react-native-animatable";

import { useNavigation } from "@react-navigation/native";

// Components
import ButtonSubmit from "../../components/Buttons/Submit";
import HeaderLogin from "../../components/Header/Login";

import styles from "./style";

export default function ForgetPassword() {
  const [visiblePassword, setVisiblePassword] = React.useState(true);

  const navigation = useNavigation();

  return (
    <TouchableWithoutFeedback
      touchSoundDisabled
      onPress={() => Keyboard.dismiss()}
    >
      <View style={styles.container}>
        <Animatable.View
          animation="fadeInUp"
          delay={600}
          style={styles.containerForm}
        >
          <HeaderLogin title="Esqueceu sua senha?" />
          <Text style={styles.descript}>
            Um código de verificação foi enviado para o seu e-mail. Insira ele
            aqui:
          </Text>

          <TextInput style={styles.textInput} label="Código" mode="outlined" />

          <View style={{ marginTop: 40, width: "100%" }}>
            <ButtonSubmit
              onPress={() => navigation.navigate("Welcome")}
              label="Verificar"
            />
          </View>
        </Animatable.View>
      </View>
    </TouchableWithoutFeedback>
  );
}
