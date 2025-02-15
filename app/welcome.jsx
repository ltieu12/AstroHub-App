import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { heightPer, widthPer } from '../helpers/common'
import Button from '../components/Button'
import ScreenWrapper from '../components/ScreenWrapper'
import { useRouter } from 'expo-router'

const Welcome = () => {
  const router = useRouter();

  return (
    <ScreenWrapper>
      <StatusBar style='light'></StatusBar>
        <View style={styles.container}>
          <Image style={styles.welcomeImage} resizeMode='contain' source={require("../assets/images/welcome img.png")}></Image>

          <View style={{ gap: 6 }}>
            <Text style={styles.title}>AstroHub</Text>
            <Text style={styles.punchline}>Explore. Connect. Go Beyond!</Text>
          </View>

          <View style={styles.footer}>
            <Button 
              title='Join the crew'
              buttonStyle={{ marginHorizontal: widthPer(3) }}
              textStyle={{color: 'white'}}
              onPress={() => router.push('signup')}
              icon='true'
            />

            <View style={styles.bottomTextContainer}>
              <Text style={styles.loginText}>Already have an account?</Text>
              <Pressable onPress={() => router.push('login')}>
                <Text style={[styles.loginText, {color: '#F6764A', textDecorationLine: 'underline'}]}>Login</Text>
              </Pressable>
            </View>
          </View>
        </View>
    </ScreenWrapper>
  )
}

export default Welcome

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  welcomeImage: {
    height: heightPer(50),
    width: widthPer(100),
    alignSelf: 'center',
  },
  title: {
    fontFamily: 'Atures 700',
    color: 'white',
    fontSize: heightPer(5.5),
    textShadowColor: 'rgba(255, 255, 255, 0.5)',
    textShadowOffset: {width: 0, height: 5},
    textShadowRadius: 1,
    textAlign: 'center',
    letterSpacing: 5.76
  },
  punchline: {
    fontFamily: 'Montserrat Alternates Medium',
    color: 'white',
    textAlign: 'center'
  },
  footer: {
    width: '50%',
    paddingVertical: 100
  },
  bottomTextContainer: {
    paddingTop: 6,
    flexDirection: 'row',
    gap: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginText: {
    color: 'white',
    textAlign: 'center',
  }
})