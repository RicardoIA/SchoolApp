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
      title: "Aula 02: Estruturas condicionais",
      course: "Logica de Programação",
      date: "24 de novembro de 2022",
      time: "09:45",
    },
    {
      title: "Aula 02: Estruturas condicionais",
      course: "Logica de Programação",
      date: "24 de novembro de 2022",
      time: "09:45",
    },
    {
      title: "Aula 02: Estruturas condicionais",
      course: "Logica de Programação",
      date: "24 de novembro de 2022",
      time: "09:45",
    },
    {
      title: "Aula 02: Estruturas condicionais",
      course: "Logica de Programação",
      date: "24 de novembro de 2022",
      time: "09:45",
    },
    {
      title: "Aula 02: Estruturas condicionais",
      course: "Logica de Programação",
      date: "24 de novembro de 2022",
      time: "09:45",
    },
    {
      title: "Aula 02: Estruturas condicionais",
      course: "Logica de Programação",
      date: "24 de novembro de 2022",
      time: "09:45",
    },
  ],
};

export default function Class() {
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
          title="Aulas"
          sections={[classes]}
        />
      </Animatable.View>
    </View>
  );
}
