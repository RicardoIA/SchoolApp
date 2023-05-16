import * as React from "react";
import { Text, View, TouchableWithoutFeedback, Keyboard } from "react-native";
import { TextInput } from "react-native-paper";
import * as Animatable from "react-native-animatable";

import { useNavigation } from "@react-navigation/native";

// Components
import ButtonSubmit from "../../components/Buttons/Submit";
import HeaderLogin from "../../components/Header/Login";

import styles from "./style";

export default function Login() {
  const [user, setUser] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(true);
  const [showError, setShowError] = React.useState("white");
  const [animationError, setAnimationError] = React.useState(undefined);

  const navigation = useNavigation();

  function changeShowPassword() {
    setShowPassword(!showPassword);
  }

  function checkLogin() {
    if (user == "ricardo" && password == "123") {
      navigation.navigate("Main");
    }
    setShowError("red");
    setAnimationError("bounceIn");
  }

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
          <HeaderLogin title="Login" />

          <Animatable.Text
            animation={animationError}
            delay={600}
            style={{
              color: showError,
              fontWeight: "bold",
              fontSize: 16,
              display: "flex",
            }}
          >
            Usuário e/ ou senha incorreto.
          </Animatable.Text>
          <TextInput
            style={styles.textInput}
            label="Usuário"
            placeholder="E-mail ou Login"
            placeholderTextColor={"#a1a1a1"}
            onChangeText={(user) => setUser(user)}
            defaultValue={user}
            mode="outlined"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.textInput}
            label="Senha"
            mode="outlined"
            secureTextEntry={showPassword}
            multiline={false}
            autoComplete={Platform.OS === "web" ? "none" : "off"}
            defaultValue={password}
            onChangeText={(password) => setPassword(password)}
            autoCorrect={false}
            autoCapitalize="none"
            right={
              <TextInput.Icon
                icon={showPassword ? "eye" : "eye-off"}
                onPress={() => changeShowPassword()}
              />
            }
          />
          <Text
            style={styles.textForget}
            onPress={() => navigation.navigate("ForgetPassword")}
          >
            Esqueci minha senha!
          </Text>
          <View style={{ marginTop: 40, width: "100%" }}>
            <ButtonSubmit label="Entrar" onPress={() => checkLogin()} />
          </View>
        </Animatable.View>
      </View>
    </TouchableWithoutFeedback>
  );
}
