import React from 'react';
import {
  View,
  Button,
  TextInput,
  StyleSheet
} from 'react-native';


const LoginScreen = ({navigation}) => {
  const [Username, setUsername] = React.useState('');
  const [Password, setPassword] = React.useState('');

  const LoginEvent = async () => {
    navigation.navigate('Quiz')
    // try {
    //   const response = await fetch(
    //     'http://10./api/login',
    //     {
    //       method: 'POST',
    //       headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify({
    //         email: Username,
    //         password: Password,
    //       }),
    //     }
    //   );
    //   const json = await response.json();
    //   console.log(json)
    //   return json;
    // } catch (error) {
    //   console.error(error);
    // }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={(name) => {
          setUsername(name)
        }}
        value={Username}
        placeholder="Username"
      />
      <TextInput
        style={styles.input}
        onChangeText={(pass) => {
          setPassword(pass)
        }}
        value={Password}
        placeholder="Password"
      />
      <Button 
        style={styles.loginBtn}
        title="Login"
        // onPress={() =>
        //   navigation.navigate('Profile', {name: 'Jane'})
        // }
        onPress={LoginEvent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    padding: 10,

  },
  loginBtn: {
    marginTop:10,
    borderRadius: 10,
    borderWidth: 1
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }
});

export default LoginScreen;