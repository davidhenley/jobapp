import React, { Component } from 'react';
import { View, Text } from 'react-native';

class DeckScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>DeckScreen</Text>
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

export default DeckScreen;
