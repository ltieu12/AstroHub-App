import { StyleSheet, View, ImageBackground } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { widthPer } from '../helpers/common';

const ScreenWrapper = ({children}) => {
    const { top } = useSafeAreaInsets();
    const paddingTop = top > 0 ? top + 5 : top = 30;

  return (
    <ImageBackground style={styles.backgroundImage} resizeMode='cover' source={require("../assets/images/splash img.png")}>
      <View style={{flex: 1, paddingTop}}>
        {
          children
        }
      </View>
    </ImageBackground>
  )
}

export default ScreenWrapper

const styles = StyleSheet.create({
  backgroundImage: {
      width: widthPer(100),
      height: '100%'
  },
})