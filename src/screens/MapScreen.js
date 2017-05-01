import React, { Component } from 'react';
import { View, Text } from 'react-native';

class MapScreen extends Component {
  static navigationOptions = {
    title: 'Map'
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>MapScreen</Text>
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

export default MapScreen;
