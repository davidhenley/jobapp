import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import { Button } from 'react-native-elements';

class ReviewScreen extends Component {
  static navigationOptions = {
    title: 'Review Screen',
    header: ({ navigate }) => ({
      right: (
        <Button
          title="Settings"
          onPress={() => {navigate('settings')}}
          backgroundColor="transparent"
          color="rgba(0, 122, 255, 1)"
          buttonStyle={{ marginRight: 0 }}
        />
      ),
      style: {
        marginTop: Platform.OS === 'android' ? 24 : 0
      }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>ReviewScreen</Text>
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

export default ReviewScreen;
