import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

export default function TaskForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  return (
    <View style={styles.main}>
      <Text style={styles.label}>Görevi giriniz:</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
      ></TextInput>
      <Text style={styles.label}>İçeriği giriniz:</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={(text) => setContent(text)}
      ></TextInput>
      <TouchableOpacity style={styles.button}>
        <View style={styles.buttonView}>
          <Text style={styles.buttonText}>Kaydet</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    marginTop: 10,
  },
  label: {
    fontSize: 20,
    marginLeft: 10,
  },
  input: {
    borderWidth: 1,
    margin: 10,
    borderRadius: 20,
    padding: 5,
    fontSize: 18,
    marginBottom: 15,
    paddingLeft: 15,
  },
  button: {
    padding:30
  },
  buttonView:{
    backgroundColor:"green",
    padding:10,
    borderRadius:30,
    alignItems:"center",
    justifyContent:"center"
  },
  buttonText: {
    color:"white",
    fontSize:20
  },
  
});
