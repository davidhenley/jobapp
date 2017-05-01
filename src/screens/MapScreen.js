import React, { Component } from 'react';
import { MapView } from 'expo';
import { View, Text } from 'react-native';

class MapScreen extends Component {
  static navigationOptions = {
    title: 'Map'
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <MapView style={{ flex: 1 }} />
      </View>
    );
  }
}

export default MapScreen;
