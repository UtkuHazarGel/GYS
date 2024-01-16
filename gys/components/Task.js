import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Task({children}) {
  return (
    <View style={styles.task}>
      <Text>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({task:{
    flex:1,
    width:100,
    borderWidth:1,
    height:10,
    backgroundColor:"lightblue",
    justifyContent:"center",
    alignItems:"center",
    padding:10
}})