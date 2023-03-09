import React from 'react';
import {
  View,
  Button,
  StyleSheet
} from 'react-native';


const RegisterScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Button 
        style={styles.loginBtn}
        title="Login"
        onPress={() =>
          navigation.navigate('Profile', {name: 'Jane'})
        }
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
  }
});

export default RegisterScreen;