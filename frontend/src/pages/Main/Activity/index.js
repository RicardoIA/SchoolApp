import * as React from "react";
import { View } from "react-native";
import * as Animatable from "react-native-animatable";

import { useNavigation } from "@react-navigation/native";

// Components
import HeaderMain from "../../../components/Header/Main";
import ListActivity from "../../../components/Main/List/Activity";

import styles from "./style";

const activities = {
  data: [
    {
      title: "Desenvolver Aplicativo React Native/ Node.js",
      course: "Projeto Intregador",
      score: 4,
      date: "12 de maio de 2023",
      time: "09:45",
    },
    {
      title: "Produção de Texto Individual",
      course: "Lógica de Programação",
      score: 6,
      date: "12 de maio de 2023",
      time: "09:45",
    },
    {
      title: "Quiz",     
      course: "Lógica de Programação",
      score: 10,
      date: "08 de maio de 2023",
      time: "10:17",
    },
    {
      title: "Quiz",     
      course: "Algoritmo e Programação em Nuvem",
      date: "08 de maio de 2023",
      time: "10:17",
    },
  ],
};

export default function Activity() {
  const navigation = useNavigation();

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
        <ListActivity
          height={580}
          title="Atividades"
          sections={[activities]}
        />
      </Animatable.View>
    </View>
  );
}
