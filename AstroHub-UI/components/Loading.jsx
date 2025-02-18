import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React from 'react'

const Loading = ({size = 'large', color = '#FFFFFF'}) => {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size={size} color={color}></ActivityIndicator>
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({})