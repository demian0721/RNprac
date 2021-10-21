import React from 'react'
import { Dimensions, Platform, StyleSheet, SafeAreaView, Text, View } from 'react-native'
import {Colors} from 'react-native-paper'
import color from 'color'

const { width, height } = Dimensions.get('window')

const App = () => {
  return (
    <SafeAreaView style={[styles.safeAreaView]}>
      <Text style={[styles.text]}>OS: {Platform.OS}</Text>
      <Text style={[styles.text]}>Width: {width} px</Text>
      <Text style={[styles.text]}>Height: {height} px</Text>

      <View style={[styles.box, styles.border]} />
      <View style={[styles.box, styles.border, {borderRadius: 20}]} />
      <View style={[styles.box, styles.border, {borderTopLeftRadius: 40, borderBottomLeftRadius: 40}]} />
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  safeAreaView: {backgroundColor: Platform.select({ios: Colors.blue500, android: Colors.lime500}), flex: 1, paddingHorizontal: Platform.select({ios: 0, android: 20}) },
  text: { fontSize: undefined, color: Platform.select({ios: color(Colors.blue500).lighten(0.9).toString(), android: color(Colors.black).lighten(0).toString() }), marginBottom: 10},
  box: { height: 100, backgroundColor: Colors.red500, marginBottom: 10, marginHorizontal: Platform.select({ios: 20, android: 0}) },
  border: { borderWidth: 10, borderColor: color('black').alpha(0.3).string() }
})