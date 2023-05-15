import * as React from "react";
import { Pressable, Text, View, SectionList } from "react-native";
import { Button, Avatar } from "react-native-paper";

import styles from "./style";

export default function ListRecent(props) {
  function checkTextScore(score) {
    if (score == undefined) {
      return "?";
    } else {
      return score;
    }
  }
  function checkStyleScore(score) {
    if (score == undefined) {
      return {};
    } else {
      if (score >= 7) return { backgroundColor: "#228B22" };
      else  return { backgroundColor: "#FF4500" };
    }
  }

  function checkButton() {
    if (props.buttonText != undefined) {
      return (
        <Button
          mode="text"
          onPress={() => console.log("Pressed: " + props.buttonText)}
        >
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
                <View style={styles.itemContent}>
                  <View style={styles.itemContentText}>
                    <Text style={styles.itemTitle}>{item.title}</Text>
                    <Text style={styles.itemSubtitle}>{item.course}</Text>
                  </View>
                  <Avatar.Text
                    style={[checkStyleScore(item.score)]}
                    labelStyle={styles.itemIconText}
                    size={50}
                    label={checkTextScore(item.score) + "/10"}
                  />
                </View>
              </View>
            </Pressable>
          )}
        />
      </View>
    </>
  );
}
