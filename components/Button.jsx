import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { heightPer } from '../helpers/common'

const Button = ({
    buttonStyle,
    textStyle,
    title = '',
    onPress = () => {},
    loading = false,
    hasShadow = true
}) => {
  return (
    <Pressable onPress={ onPress } style={[styles.button]}>
      <Text style={[styles.text, textStyle]}>{ title }</Text>
    </Pressable>
  )
}

export default Button

const styles = StyleSheet.create({
    button: {
        backgroundColor: "linear-gradient(90deg, rgba(76, 70, 240, 0.90) 0%, rgba(237, 100, 53, 0.90) 100%)",
        height: heightPer(6.6),
        justifyContent: "center",
        alignItems: "center",
        borderCurve: "continuous",
        borderRadius: 15
    },
    text: {
        fontFamily: 'Montserrat Alternates Medium'
    }
})