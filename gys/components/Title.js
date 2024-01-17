import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Title({children}) {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.titleText}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    titleText:{
        fontSize:24
    },
    titleContainer:{
        backgroundColor:"lightblue",
        flex:1,
        width:"100%",
        justifyContent:"center",alignItems:"center"
    }
})