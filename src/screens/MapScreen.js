import React, { Component } from 'react';
import { MapView } from 'expo';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { View, Text, ActivityIndicator } from 'react-native';

class MapScreen extends Component {
  static navigationOptions = {
    title: 'Map'
  };

  state = {
    mapLoaded: false,
    region: {
      longitude: -122,
      latitude: 37,
      longitudeDelta: 0.04,
      latitudeDelta: 0.09
    }
  };

  componentDidMount() {
    this.setState({ mapLoaded: true });
  }

  _onRegionChangeComplete = (region) => {
    this.setState({ region });
  }

  render() {
    if (!this.state.mapLoaded) {
      return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <ActivityIndicator size="large" />
        </View>
      );
    }

    return (
      <View style={{ flex: 1 }}>
        <MapView
          style={{ flex: 1 }}
          region={this.state.region}
          onRegionChangeComplete={this._onRegionChangeComplete}
        />
      </View>
    );
  }
}

export default connect(null, actions)(MapScreen);
