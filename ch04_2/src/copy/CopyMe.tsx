import React from 'react'
// Packages
import { Colors } from 'react-native-paper'
// API
import { StyleSheet } from 'react-native'
// Core Components
import {  Text, View } from 'react-native'

const title = "CopyMe"

const CopyMe = () => {
  return (
    <View style={[styles.view]}>
      <Text style={[styles.text]}>{title}</Text>
    </View>
  )
}

export default CopyMe

const styles = StyleSheet.create({
  view: {flex: 1, padding: 5, backgroundColor: Colors.blue900},
  text: {fontSize: 20, color: 'white'},
})
