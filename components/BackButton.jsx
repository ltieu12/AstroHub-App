import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Feather } from "@expo/vector-icons";

const BackButton = ({size = 30, router}) => {
  return (
    <Pressable onPress={() => router.back()}>
      <Feather name="arrow-left" size={size} color='white' />
    </Pressable>
  )
}

export default BackButton

const styles = StyleSheet.create({})