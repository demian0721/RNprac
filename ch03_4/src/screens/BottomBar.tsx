import React from 'react'
// Packages
import { Colors } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
// API
import { StyleSheet, Alert } from 'react-native'
// Core Components
import {  View } from 'react-native'

const iconSize = 30
const iconColor = 'white'
const icons = ['home', 'table-search', 'face-profile-woman', 'account-settings']

const BottomBar = () => {
  const children = icons.map((name) => (
    <Icon key={name} name={name} size={iconSize} color={iconColor} onPress={() => {Alert.alert(`'${name}' Icon Pressed`)}}/>
  ))
  return <View style={[styles.view]}>{children}</View>
  
}

export default BottomBar

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 10,
    backgroundColor: Colors.lightBlue500
  },
  text: {fontSize: 20, color: 'white'},
})
