import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { heightPer } from '../helpers/common'
import { LinearGradient } from 'expo-linear-gradient'
import { Feather } from "@expo/vector-icons";
import Loading from './Loading';

const Button = ({
    buttonStyle,
    textStyle,
    title = '',
    onPress = () => {},
    loading = false,
    icon = false
}) => {

  if (loading) {
    return (
      <View style={ buttonStyle }>
        <Loading />
      </View>
    );
  }

  return (
    <TouchableOpacity onPress={ onPress } style={ buttonStyle }>
      <LinearGradient 
        colors={['#4C46F0', '#ED6435']}
        start={[0, 0.5]}
        end={[1, 0.5]}
        style={styles.linearGradient}
      >
        <View style={styles.content}>
          <Text style={[styles.text, textStyle]}>{ title }</Text>
          {icon && <Feather name="arrow-right" size={20} color="white" />}
        </View>
      </LinearGradient>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    linearGradient: {
        height: heightPer(6.6),
        justifyContent: "center",
        alignItems: "center",
        borderCurve: "continuous",
        borderRadius: 15
    },
    content: {
      flexDirection: 'row',
      gap: 5
    },
})