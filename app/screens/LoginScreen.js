import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  Image,
  Button,
  TextInput,
  StyleSheet,
  Alert
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({navigation}) => {
  const [Username, setUsername] = useState('');

  const getData = () => {
    try {
        AsyncStorage.getItem('Username')
        .then(value => {
            if(value != null){
              navigation.navigate('Quiz');
            }
        })
    } catch (error) {
        console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  const LoginEvent = async () => {
    if(Username.length == 0){
      Alert.alert('Warning!', 'Please enter your name!');
    }else{
      try {
        await AsyncStorage.setItem('Username', Username);
        navigation.navigate('Quiz');
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Image 
        style={styles.logo}
        source={require('../assets/images/playstore.png')}
        />
        <Text style={styles.text}>Đấu trường Đất Việt</Text>
      <TextInput
        style={styles.input}
        onChangeText={(name) => {
          setUsername(name)
        }}
        value={Username}
        placeholder="Username"
      />
      <Button 
        style={styles.loginBtn}
        title="Login"
        onPress={LoginEvent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#0080ff'
  },
  logo: {
    width: 100,
    height: 100,
    margin: 20
  },
  loginBtn: {
    marginTop:10,
    borderRadius: 10,
    borderWidth: 1
  },
  text: {
    fontSize: 30,
    color: '#ffffff'
  },
  input: {
    width: 300,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 10,
    backgroundColor: '#ffffff',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 130,
    marginBottom: 10
  }
});

export default LoginScreen;