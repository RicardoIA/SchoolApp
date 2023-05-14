import * as React from "react";
import { Text } from "react-native";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import styles from './styles';

export default function ButtonSubmit(props) {
  const navigation = useNavigation();

  return (
    <Button
      style={styles.buttonSubmit}
      mode="contained"
      onPress={props.onPress}
    >
      <Text style={styles.textSubmit}>{props.label}</Text>
    </Button>
  );
}
