import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Task from "../components/Task";
import SubMenu from "../components/SubMenu";
import Title from "../components/Title";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Title>Görevler</Title>
      </View>
      <View style={styles.taskContainer}>
        <ScrollView >
          <Task>Bu bir Görevdir!</Task>
          <Task>Bu bir Görevdir!</Task>
          <Task>Bu bir Görevdir!</Task>
          <Task>Bu bir Görevdir!</Task>
          <Task>Bu bir Görevdir!</Task>
          <Task>Bu bir Görevdir!</Task>
          <Task>Bu bir Görevdir! 6</Task>
          <Task>Bu bir Görevdir! 6</Task>
          <Task>Bu bir Görevdir! 6</Task>
          <Task>Bu bir Görevdir! 6</Task>
          <Task>Bu bir Görevdir! 6</Task>
          <Task>Bu bir Görevdir! 10</Task>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  titleContainer: { flex: 1, width: "100%" },
  taskContainer: {
    flex: 15,
    width: "100%",
    backgroundColor: "white",
    marginTop:5
  },
});
