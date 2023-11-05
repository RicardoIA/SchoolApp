import React, { useState, useContext } from "react";
import { Text, View, TouchableWithoutFeedback, Keyboard } from "react-native";
import { TextInput } from "react-native-paper";
import * as Animatable from "react-native-animatable";

import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../contexts/auth";

// Components
import ButtonSubmit from "../../components/Buttons/Submit";
import HeaderLogin from "../../components/Header/Login";

import styles from "./style";

export default function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [showError, setShowError] = useState("white");
  const [animationError, setAnimationError] = useState(undefined);

  const navigation = useNavigation();
  const { signIn } = useContext(AuthContext);

  function changeShowPassword() {
    setShowPassword(!showPassword);
  }

  function handleLogin() {
    signIn(user, password);

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
            <ButtonSubmit label="Entrar" onPress={() => handleLogin()} />
          </View>
        </Animatable.View>
      </View>
    </TouchableWithoutFeedback>
  );
}
