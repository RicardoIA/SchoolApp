import * as React from "react";
import { Pressable, Text, View, SectionList } from "react-native";

import styles from "./style";

export default function ListCourse(props) {
  return (
    <SectionList
          contentContainerStyle={styles.container}
          horizontal={true}
          sections={props.courses}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <Pressable
              style={({ pressed }) => [
                { backgroundColor: pressed ? "#EDF2FA" : "white" },
                styles.item,
              ]}
            >
              <View>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.subtitle}>{item.teacher}</Text>
              </View>
            </Pressable>
          )}
        />
  );
}
