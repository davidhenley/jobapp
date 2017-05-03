import React, { Component } from 'react';
import { View, Text, Platform, ScrollView } from 'react-native';
import { Button, Card } from 'react-native-elements';
import { connect } from 'react-redux';

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

  renderLikedJobs() {
    return this.props.likes.map(job => {
      return (
        <Card key={job.jobkey}>
          <View style={{ height: 200 }}>
            <View style={styles.detailWrapper}>
              <Text style={styles.italics}>{job.company}</Text>
              <Text style={styles.italics}>{job.formattedRelativeTime}</Text>
            </View>
          </View>
        </Card>
      );
    });
  }

  render() {
    return (
      <ScrollView>
        {this.renderLikedJobs()}
      </ScrollView>
    );
  }
}

const styles = {
  detailWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  italics: {
    fontStyle: 'italic'
  }
}

const mapStateToProps = ({ likes }) => {
  return { likes };
}

export default connect(mapStateToProps)(ReviewScreen);
