import { StyleSheet, View, TextInput } from 'react-native'
import React from 'react'
import { heightPer } from '../helpers/common'

const Input = (props) => {
  return (
    <View style={[styles.container, props.containerStyles && props.containerStyles]}>
      <TextInput
        style={{flex: 1, color: '#FFFFFF'}}
        placeholderTextColor='#B9B9B9'
        ref={props.inputRef && props.inputRef}
        {...props}
      >
      </TextInput>
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: heightPer(6),
        borderBottomWidth: 1,
        borderBottomColor: '#B9B9B9',
        alignItems: 'center',
        justifyContent: 'center'
    }
})