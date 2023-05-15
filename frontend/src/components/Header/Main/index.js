import * as React from "react";
import { View, Pressable, Text } from "react-native";
import { Badge } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";


import styles from "./style";

export default function HeaderMain(props) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Olá, {props.name}</Text>
        <Text style={styles.subtitle}>{props.course}</Text>
      </View>
      <Pressable
        style={({ pressed }) => [
          { backgroundColor: pressed ? "#ccc" : "white" },
          styles.avatarIcon,
        ]}
      >
        <Badge style={{ position: "absolute", top: -6 }} size={22}>
          2
        </Badge>
        <MaterialCommunityIcons name="account" color="#999" size={40} />
      </Pressable>
    </View>
  );
}
