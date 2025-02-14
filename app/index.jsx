import { View, Text, Button } from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import { useRouter } from 'expo-router'
import { useFonts } from 'expo-font'

const index = () => {
  const router = useRouter();

  const [fontsLoaded] = useFonts({
    "Atures 700": require("../assets/fonts/Atures 700 PERSONAL USE ONLY.ttf"),
    "Montserrat Alternates Medium": require("../assets/fonts/Montserrat Alternates Medium.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <View>
        <Loading />
      </View>
    );
  }
  
  return (
    <ScreenWrapper>
      <Text>index</Text>
      <Button title="welcome" onPress={() => router.push('welcome')}></Button>
    </ScreenWrapper>
  )
}

export default index