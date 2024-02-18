import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { Context } from '../context/TaskContext'

export default function TaskScreen({route}) {
    const {state} = useContext(Context)
    console.log(route.params.id)
    const task = state.find((task)=>task.id === route.params.id)
  return (
    <View>
      <Text>{task.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})