import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import { StatusBar } from 'expo-status-bar'
import { heightPer, widthPer } from '../helpers/common'
import Button from '../components/Button'

const Welcome = () => {
  return (
    <ScreenWrapper bg="#141823">
      <StatusBar style="light"></StatusBar>
      <View style={styles.container}>
        <Image style={styles.welcomeImage} resizeMode="contain" source={require("../assets/images/welcome img.png")}></Image>

        <View style={{ gap: 5 }}>
          <Text style={styles.title}>AstroHub</Text>
          <Text style={styles.punchline}>Explore. Connect. Go Beyond!</Text>
        </View>

        <View style={styles.footer}>
          <Button 
            title='Join the crew'
            buttonStyle={{ marginHorizontal: widthPer(3) }}
            textStyle={{color: "white"}}
            onPress={() => {}}
          />
        </View>
      </View>
    </ScreenWrapper>
  )
}

export default Welcome

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "space-around",
    backgroundColor: "#141823",
    paddingHorizontal: widthPer(4)
  },
  welcomeImage: {
    height: heightPer(40),
    width: widthPer(100),
    alignSelf: "center",
  },
  title: {
    fontFamily: "Atures 700 PERSONAL USE ONLY",
    color: "white",
    fontSize: heightPer(5),
    textAlign: "center",
    letterSpacing: 5.76
  },
  punchline: {
    fontFamily: "Montserrat Alternates Medium",
    color: "white",
    textAlign: "center"
  },
  footer: {
    width: '50%',
    paddingVertical: 120
  }
})