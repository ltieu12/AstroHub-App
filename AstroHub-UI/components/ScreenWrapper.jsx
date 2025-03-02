import { StyleSheet, View, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { widthPer } from '../helpers/common';
import Loading from './Loading';

const ScreenWrapper = ({children}) => {
    const { top } = useSafeAreaInsets();
    const paddingTop = top > 0 ? top + 5 : top = 30;
    const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Loading />}
      <ImageBackground 
        style={styles.backgroundImage} 
        resizeMode='cover' 
        source={require("../assets/images/splash img.png")}
        onLoad={() => setLoading(false)}
      >
        <View style={{flex: 1, paddingTop}}>
          {
            children
          }
        </View>
      </ImageBackground>
    </>
  )
}

export default ScreenWrapper

const styles = StyleSheet.create({
  backgroundImage: {
      width: widthPer(100),
      height: '100%'
  },
})