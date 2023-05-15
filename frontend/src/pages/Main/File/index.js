import * as React from "react";
import { View } from "react-native";
import * as Animatable from "react-native-animatable";

// Components
import HeaderMain from "../../../components/Header/Main";
import ListRecent from "../../../components/Main/List/Recent";

import styles from "./style";

const classes = {
  data: [
    {
      title: "Livro: como ser um programador",
      course: "Logica de Programação",
      date: "24 de novembro de 2022",
      time: "09:45",
    },
    {
      title: "Nóticia: UX/ UI melhores práticas",
      course: "Programação para Web",
      date: "24 de novembro de 2022",
      time: "09:45",
    },
    {
      title: "Nóticia: Chat GPT e suas funcionalidades",
      course: "Algoritmo e Computação em Nuvem",
      date: "24 de novembro de 2022",
      time: "09:45",
    },
  ],
};

export default function File() {

  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInDown" delay={200}>
        <HeaderMain name="Ricardo Amorim" course="ADS" />
      </Animatable.View>

      <Animatable.View
        animation="fadeInUp"
        delay={200}
        style={{ marginTop: 20 }}
      >
        <ListRecent
          height={580}
          title="Arquivos"
          sections={[classes]}
        />
      </Animatable.View>
    </View>
  );
}
