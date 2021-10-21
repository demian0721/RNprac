import React from 'react';
import {
  SafeAreaView,
  Button,
  Alert,
  TouchableOpacity,
  TouchableHighlight,
  Text,
  TextInput,
} from 'react-native';

const _onPress = () => Alert.alert('home pressed.', 'message')

export default function App() {
  return (
  <SafeAreaView>
    <Button title='Home' onPress={_onPress} />
    <TouchableOpacity onPress={_onPress}>
      <Text>TouchableOpacity</Text>
    </TouchableOpacity>
    <TouchableHighlight onPress={_onPress}>
      <Text>TouchableHighlight</Text>
    </TouchableHighlight>
    <TextInput
      placeholder='enter your name'
      onChangeText={(text: string) => console.log(text)}
      onFocus={() => console.log('onFocus')}
      onBlur={() => console.log('onBlur')}
      onEndEditing={() => console.log('onEndEditing')}
    />
  </SafeAreaView>
  )
}
