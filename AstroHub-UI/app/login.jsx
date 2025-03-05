import { StyleSheet, StatusBar, View, Text, Pressable, Alert } from 'react-native'
import React, { useRef, useState } from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import { heightPer, widthPer } from '../helpers/common'
import BackButton from '../components/BackButton'
import { useRouter } from 'expo-router'
import { BlurView } from 'expo-blur'
import Input from '../components/Input'
import Button from '../components/Button'
import { loginUser } from '../helpers/api'

const Login = () => {
  const router = useRouter();

  const usernameRef = useRef("");
  const passwordRef = useRef("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async () => {
    if (!usernameRef.current || !passwordRef.current) {
      Alert.alert('Login', "Please fill in all fields")
      return;
    }

    await handleLogin();
  };

  const handleLogin = async () => {
    try {
      const formData = {
        "username": usernameRef.current,
        "password": passwordRef.current
      }

      await loginUser(formData);
      Alert.alert("Success", "You have been logged in!");
      router.push('home');
    }
    catch(error) {
      console.log(error);
      Alert.alert("Error", error.message || "Login failed.");
    }
  }

  return (
    <ScreenWrapper>
      <StatusBar style="light"></StatusBar>
      <BlurView intensity={4} tint="dark" style={styles.container}>
        <View style={{gap: 40}}>
          <BackButton router={router} />
          <Text style={styles.title}>Welcome Back!</Text>
        </View>

        <View style={{gap: 30}}>
          <Input
            placeholder='Enter your username'
            onChangeText={value => usernameRef.current = value}>
          </Input>
          <Input
            placeholder='Enter your password'
            secureTextEntry
            onChangeText={value => passwordRef.current = value}>
          </Input>
          <Text style={{color: '#C3B5EC'}}>Forgot Password?</Text>
        </View>

        <View style={styles.footer}>
          <Button 
            title='Sign In'
            buttonStyle={{ marginHorizontal: widthPer(25) }}
            textStyle={{color: 'white'}}
            loading={loading}
            onPress={onSubmit}
          >
          </Button>
          <View style={styles.bottomTextContainer}>
            <Text style={{color: '#FFFFFF'}}>Don't have an account?</Text>
            <Pressable onPress={() => router.push('signup')}>
              <Text style={[{color: '#F6764A', fontWeight: 700}]}>Sign Up</Text>
            </Pressable>
          </View>
        </View>
      </BlurView>
    </ScreenWrapper>
  )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'center',
        height: heightPer(60),
        width: widthPer(85),
        paddingVertical: heightPer(3),
        paddingHorizontal: widthPer(4),
        marginTop: heightPer(3),        
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