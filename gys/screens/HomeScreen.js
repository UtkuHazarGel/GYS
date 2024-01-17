import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Task from "../components/Task";
import SubMenu from "../components/SubMenu";

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View>
        <Text>Görevler</Text>
      </View>
      <Task>Bu bir Görevdir!</Task>

     
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  
});
