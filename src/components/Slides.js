import React, { Component } from 'react';
import { ScrollView, View, Text, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Slides extends Component {
  renderSlides() {
    const { data, onComplete } = this.props;
    return data.map((slide, i) =>
      <View key={i} style={[styles.slideStyle, { backgroundColor: slide.color }]}>
        <Text style={styles.slideTextStyle}>{slide.text}</Text>
        {i === data.length - 1 && (
          <Button
            buttonStyle={styles.buttonStyle}
            title="Onwards!"
            raised
            onPress={onComplete}
          />
        )}
      </View>
    );
  }

  render() {
    return (
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      >
        {this.renderSlides()}
      </ScrollView>
    );
  }
}

const styles = {
  slideStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH
  },
  slideTextStyle: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  buttonStyle: {
    marginTop: 15,
    backgroundColor: '#0288D1'
  }
}

export default Slides;
