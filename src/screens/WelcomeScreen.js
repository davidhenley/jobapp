import React, { Component } from 'react';
import { AppLoading } from 'expo';
import { ScrollView, View, Text, AsyncStorage } from 'react-native';
import Slides from '../components/Slides';

const SLIDE_DATA = [
  { text: 'Welcome to Job App', color: '#4285F4' },
  { text: 'Use this to get a job', color: '#EA4335' },
  { text: 'Set your location, then swipe away', color: '#34A853' }
];

class WelcomeScreen extends Component {
  state = {
    isReady: false
  };

  async componentWillMount() {
    let token = await AsyncStorage.getItem('fb_token');
    if (token) {
      this.setState({ isReady: true });
      this.props.navigation.navigate('map');
    } else {
      this.setState({ isReady: true });
    }
  }

  onSlidesComplete = () => {
    this.props.navigation.navigate('auth');
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }
    return (
      <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete} />
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

export default WelcomeScreen;
