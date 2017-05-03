import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import * as actions from '../actions';

class SettingsScreen extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Reset Liked Jobs"
          onPress={() => this.props.clearLikedJobs()}
        />
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

export default connect(null, actions)(SettingsScreen);
