import * as React from "react";
import { View } from "react-native";
import * as Animatable from "react-native-animatable";

import { useNavigation } from "@react-navigation/native";

// Components
import HeaderMain from "../../../components/Header/Main";
import ListCourse from "../../../components/Main/List/Course";
import ListRecent from "../../../components/Main/List/Recent";

import styles from "./style";

const courses = {
  data: [
    {
      name: "Programação Orientada a Objeto",
      teacher: "Cleber Machado",
    },
    {
      name: "Arquitetura de Dados",
      teacher: "Doroti Assunção",
    },
    {
      name: "Banco de Dados",
      teacher: "Felipe Pares",
    },
  ],
};

const activities = {
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

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInDown" delay={200}>
        <HeaderMain name="Ricardo Amorim" course="ADS" />
      </Animatable.View>

      <Animatable.View animation="fadeInUp" delay={200}>
        <ListCourse courses={[courses]} />
      </Animatable.View>

      <Animatable.View animation="fadeInUp" delay={200}>
        <ListRecent
          title="Recentes"
          buttonText="Ver Mais"
          height={440}
          sections={[activities]}
        />
      </Animatable.View>
    </View>
  );
}
