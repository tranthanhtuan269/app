import React from 'react';
import {
  Button,
  View
} from 'react-native';


const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Button style={{ margin: 10, padding: 10 }}
        title="Login"
        onPress={() =>
          navigation.navigate('Login')
        }
      />
      <Button style={{ margin: 10 }}
        title="Register"
        onPress={() =>
          navigation.navigate('Register', {name: 'Jane'})
        }
      />
    </View>
  );
};

export default HomeScreen;