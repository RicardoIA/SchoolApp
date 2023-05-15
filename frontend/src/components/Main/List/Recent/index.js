import * as React from "react";
import { Pressable, Text, View, SectionList } from "react-native";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import styles from "./style";

export default function ListRecent(props) {
  const navigation = useNavigation();

  function checkButton() {
    if (props.buttonText != undefined) {
      return (
        <Button mode="text" onPress={() => console.log("Pressed: " + props.buttonText)}>
          <Text style={styles.headerTextButton}>{props.buttonText}</Text>
        </Button>
      );
    }
  }

  return (
    <>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{props.title}</Text>

        {checkButton()}
      </View>
      <View style={{ height: props.height }}>
        <SectionList
          contentContainerStyle={styles.container}
          sections={props.sections}
          keyExtractor={(item, index) => item + index}
          overScrollMode="always"
          renderItem={({ item }) => (
            <Pressable
              style={({ pressed }) => [
                { backgroundColor: pressed ? "#EDF2FA" : "white" },
                styles.item,
              ]}
            >
              <View>
                <View style={styles.itemHeader}>
                  <Text style={styles.itemHeaderText}>{item.date}</Text>
                  <Text style={styles.itemHeaderText}>{item.time}</Text>
                </View>
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Text style={styles.itemSubtitle}>{item.course}</Text>
              </View>
            </Pressable>
          )}
        />
      </View>
    </>
  );
}
