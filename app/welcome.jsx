import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import { StatusBar } from 'expo-status-bar'
import { heightPer, widthPer } from '../helpers/common'
import Button from '../components/Button'
import { useFonts } from 'expo-font'
import { ImageBackground } from 'react-native'

const Welcome = () => {
  const [fontsLoaded] = useFonts({
    "Atures 700": require("../assets/fonts/Atures 700 PERSONAL USE ONLY.ttf"),
    "Montserrat Alternates Medium": require("../assets/fonts/Montserrat Alternates Medium.ttf"),
  });

  if (!fontsLoaded) {
    return <Text>Loading page...</Text>;
  }

  return (
    <>
      <StatusBar style="light"></StatusBar>
      <ImageBackground style={styles.backgroundImage} resizeMode="cover" source={require("../assets/images/splash img.png")}>
        <View style={styles.container}>
          <Image style={styles.welcomeImage} resizeMode="contain" source={require("../assets/images/welcome img.png")}></Image>

          <View style={{ gap: 6 }}>
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
      </ImageBackground>
      
    </>
  )
}

export default Welcome

const styles = StyleSheet.create({
  container: {
    paddingTop: heightPer(4),
    flex: 1,
    alignItems: "center",
  },
  backgroundImage: {
    width: widthPer(100),
    height: '100%'
  },
  welcomeImage: {
    height: heightPer(50),
    width: widthPer(100),
    alignSelf: "center",
  },
  title: {
    fontFamily: "Atures 700",
    color: "white",
    fontSize: heightPer(5.5),
    textShadowColor: 'rgba(255, 255, 255, 0.5)',
    textShadowOffset: {width: 0, height: 5},
    textShadowRadius: 1,
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
    paddingVertical: 100
  }
})