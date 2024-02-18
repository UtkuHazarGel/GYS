import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React, { useContext } from "react";
import { Context } from "../context/TaskContext";
import { Feather } from "@expo/vector-icons";

export default function HomeScreen({navigation}) {
  const { state, addTask, deleteTask } = useContext(Context);
  return (
    <View>
      <Button title="Ekle" onPress={addTask} />
      <FlatList
        data={state}
        keyExtractor={(task) => task.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={()=>navigation.navigate("Task",{id:item.id})}>
              <View style={styles.taskContainer}>
                <Text style={styles.taskTitle}>{item.title}</Text>

                <TouchableOpacity onPress={() => deleteTask(item.id)}>
                  <Feather name="trash" size={24} color="black" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  taskContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderColor: "gray",
  },
  taskTitle: {
    fontSize: 18,
  },
});
