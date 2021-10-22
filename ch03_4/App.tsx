import React from 'react'
// Packages
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Colors } from 'react-native-paper'
// API
import { Platform, StyleSheet, Alert } from 'react-native'
// Core Components
import {  SafeAreaView, View } from 'react-native'
import TopBar from './src/screens/TopBar'
import Content from './src/screens/Content'
import BottomBar from './src/screens/BottomBar'

const App = () => {
  return (
    <React.Fragment>
      <SafeAreaView style={[styles.flex]}>
        <TopBar />
        <Content />
        <BottomBar />
      </SafeAreaView>
      <View style={[styles.absoluteView]}>
        <Icon name="feather" size={50} color="white" onPress={() => Alert.alert('Floating Action Button')} />
      </View>
    </React.Fragment>
  )
}

export default App

const styles = StyleSheet.create({
  flex: {flex: 1, backgroundColor: Colors.lightBlue100},
  absoluteView: {
    backgroundColor: Colors.purple900,
    position: 'absolute',
    right: 30,
    bottom: Platform.select({ios: 100, android: 80}),
    padding: 10,
    borderRadius: 35
  },
})