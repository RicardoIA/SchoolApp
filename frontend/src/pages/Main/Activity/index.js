import * as React from "react";
import { Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import * as Animatable from "react-native-animatable";

import { useNavigation } from "@react-navigation/native";

// Components
import ButtonSubmit from "../../../components/Buttons/Submit";
import HeaderLogin from "../../../components/Header/Login";

import styles from "./style";

export default function Activity() {
  const [user, setUser] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [visiblePassword, setVisiblePassword] = React.useState(true);
  const [visibleError, setVisibleError] = React.useState("white");
  const [animationError, setAnimationError] = React.useState(undefined);

  const navigation = useNavigation();


  return (
    <View style={styles.container}>
      <Animatable.View
        animation="fadeInUp"
        delay={600}
        style={styles.containerForm}
      >
        <HeaderLogin title="Atividades" />

        

      </Animatable.View>
    </View>
  );
}
