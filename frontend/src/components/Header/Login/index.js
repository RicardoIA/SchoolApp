import * as React from "react";
import { Text } from "react-native";

import styles from "../../Header/Login/style";

export default function HeaderLogin(props) {

  return (
    <Text style={styles.title}>{props.title}</Text>
  );
}