import React, { Component } from 'react';
import { MapView } from 'expo';
import { View, Text, Platform, ScrollView, Linking } from 'react-native';
import { Button, Card, Icon } from 'react-native-elements';
import { connect } from 'react-redux';

class ReviewScreen extends Component {
  static navigationOptions = {
    title: 'Review Jobs',
    tabBar: {
      icon: ({ tintColor }) => {
        return (
          <Icon
            name="favorite"
            size={30}
            color={tintColor}
          />
        );
      }
    },
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

  renderLikedJobs() {
    return this.props.likes.map(job => {
      const {
        company,
        jobtitle,
        formattedRelativeTime,
        url,
        jobkey,
        latitude,
        longitude
      } = job;
      return (
        <Card key={jobkey} title={jobtitle}>
          <View style={{ height: 200 }}>
            <MapView
              scrollEnabled={false}
              style={{ flex: 1 }}
              cacheEnabled={Platform.OS === 'android'}
              initialRegion={{ latitude, longitude, latitudeDelta: 0.045, longitudeDelta: 0.02 }}
            />
            <View style={styles.detailWrapper}>
              <Text style={styles.italics}>{company}</Text>
              <Text style={styles.italics}>{formattedRelativeTime}</Text>
            </View>
            <Button
              title="Apply Now!"
              backgroundColor="#03A9F4"
              onPress={() => Linking.openURL(url)}
            />
          </View>
        </Card>
      );
    });
  }

  render() {
    if (this.props.likes.length === 0) {
      return <View style={styles.container}><Text>No liked jobs found</Text></View>
    }
    return (
      <ScrollView>
        {this.renderLikedJobs()}
      </ScrollView>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  detailWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    marginTop: 10
  },
  italics: {
    fontStyle: 'italic'
  }
}

const mapStateToProps = ({ likes }) => {
  return { likes };
}

export default connect(mapStateToProps)(ReviewScreen);
