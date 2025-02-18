import { StyleSheet, StatusBar, View, Text, Pressable, Alert } from 'react-native'
import React, { useRef, useState } from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import { heightPer, widthPer } from '../helpers/common'
import BackButton from '../components/BackButton'
import { useRouter } from 'expo-router'
import { BlurView } from 'expo-blur'
import Input from '../components/Input'
import Button from '../components/Button'

const SignUp = () => {
  const router = useRouter();
  const nameRef = useRef();
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [loading, setLoading] = useState(false);

  const onSubmit = () => {
    if (!nameRef.current || !emailRef.current || !passwordRef.current) {
      Alert.alert('Sign Up', "Please fill the details to create an account")
      return;
    }
  };

  return (
    <ScreenWrapper>
      <StatusBar style="light"></StatusBar>
      <BlurView intensity={4} tint="dark" style={styles.container}>
        <View style={{gap: 40}}>
          <BackButton router={router} />
          <Text style={styles.title}>Let's Get You Onboard!</Text>
        </View>

        <View style={{gap: 30}}>
          <Input
            placeholder='Enter your name'
            onChangeText={value => nameRef.current = value}>
          </Input>
          <Input
            placeholder='Enter your email'
            onChangeText={value => emailRef.current = value}>
          </Input>
          <Input
            placeholder='Enter your password'
            secureTextEntry
            onChangeText={value => passwordRef.current = value}>
          </Input>
        </View>

        <View style={styles.footer}>
          <Button 
            title='Sign Up'
            buttonStyle={{ marginHorizontal: widthPer(25) }}
            textStyle={{color: 'white'}}
            loading={loading}
            onPress={onSubmit}
          >
          </Button>
          <View style={styles.bottomTextContainer}>
            <Text style={{color: '#FFFFFF'}}>Already have an account?</Text>
            <Pressable onPress={() => router.push('login')}>
              <Text style={[{color: '#F6764A', fontWeight: 700}]}>Sign In</Text>
            </Pressable>
          </View>
        </View>
      </BlurView>
    </ScreenWrapper>
  )
}

export default SignUp

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'center',
        height: heightPer(60),
        width: widthPer(85),
        paddingVertical: heightPer(3),
        paddingHorizontal: widthPer(4),
        marginTop: heightPer(5),        
        marginBottom: heightPer(10),
        backgroundColor: 'rgba(20, 24, 35, 0.8)',
        borderCurve: 'continuous',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#535353',
        gap: 40
    },
    title: {
      color: 'white',
      fontFamily: 'Montserrat Alternates SemiBold',
      fontSize: 40
    },
    footer: {
      paddingVertical: 50,
      textAlign: 'center'
    },
    bottomTextContainer: {
      paddingTop: 6,
      flexDirection: 'row',
      gap: 5,
      justifyContent:'center',
      alignItems: 'center'
    },
})