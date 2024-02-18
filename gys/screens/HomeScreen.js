import { StyleSheet, Text, View, FlatList,Button } from "react-native";
import React, { useContext } from "react";
import {Context} from "../context/TaskContext";

export default function HomeScreen() {
  const {state,addTask} = useContext(Context);
  return (
    <View>
      <Button title="Ekle" onPress={addTask} />
      <FlatList
        data={state}
        keyExtractor={task => task.title}
        renderItem={({ item }) => {
          return (
            <View>
              <Text>{item.title}</Text>
              <Text>{item.content}</Text>
              
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
