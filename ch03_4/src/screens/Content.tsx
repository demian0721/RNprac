import React from 'react'
// API
import { StyleSheet } from 'react-native'
// Core Components
import {  ScrollView, View, Image } from 'react-native'
import * as D from '../data'

const avatars = D.makeArray(200).map(() => D.randomAvatarUrl())

const Content = () => {
  const children = avatars.map((avatarUrl, index) => (
    <View key={index.toString()} style={styles.avatarView}>
      <Image style={styles.avatar} source={{uri: avatarUrl}} />
    </View>
  ))
  return (
    <ScrollView contentContainerStyle={[styles.view]}>{children}</ScrollView>
  )
}

export default Content

const styles = StyleSheet.create({
  view: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    // flex: 1,
    padding: 5
  },
  text: {fontSize: 20},
  avatarView: {padding: 3},
  avatar: {width: 50, height: 50, borderRadius: 25}
})
