import React, { Component } from 'react';
import { Facebook } from 'expo';
import { View, Text } from 'react-native';

const API_KEY = '209606516208844';

class AuthScreen extends Component {
  async componentWillMount() {
    await Facebook.logInWithReadPermissionsAsync(API_KEY, { permissions: ['public_profile'] });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>AuthScreen</Text>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
}

export default AuthScreen;
