import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import { connect } from 'react-redux';
import Swipe from '../components/Swipe';
import * as actions from '../actions';
import { MapView } from 'expo';
import { Card, Button } from 'react-native-elements';

class DeckScreen extends Component {
  static navigationOptions = {
    title: 'Deck'
  };

  renderCard(job) {
    const initialRegion = {
      latitude: job.latitude,
      longitude: job.longitude,
      latitudeDelta: 0.045,
      longitudeDelta: 0.02
    };

    return (
      <Card style={{ height: 500 }} title={job.jobtitle}>
        <View style={{ height: 300 }}>
          <MapView
            scrollEnabled={false}
            style={{ flex: 1 }}
            cacheEnabled={Platform.OS === 'android'}
            initialRegion={initialRegion}
          />
        </View>
        <View style={styles.detailWrapper}>
          <Text>{job.company}</Text>
          <Text>{job.formattedRelativeTime}</Text>
        </View>
        <View>
          <Text>{job.snippet.replace(/<b>/g, '').replace(/<\/b>/g, '')}</Text>
        </View>
      </Card>
    );
  }

  renderNoMoreCards() {
    return (
      <Card title="No more jobs">
      </Card>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Swipe
          data={this.props.jobs}
          renderCard={this.renderCard}
          onSwipeRight={job => this.props.likeJob(job)}
          renderNoMoreCards={this.renderNoMoreCards}
          keyProp="jobkey"
        />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    marginTop: 10
  },
  detailWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    marginTop: 10
  }
}

const mapStateToProps = ({ jobs }) => {
  return { jobs: jobs.results };
};

export default connect(mapStateToProps, actions)(DeckScreen);
