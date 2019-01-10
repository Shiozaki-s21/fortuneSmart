import React from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';

/**
 * Func: 
 *  Display card 
 *  Display result
 *  Share result
 *  Back to home
 */
export default class DoFortune extends React.Component {
  constructor(props) {
    super(props);
    this._onPressCard = this._onPressCard.bind(this);
  }

  state = {
    cardAnimation: new Animated.Value(0),
    guideAnimation: new Animated.Value(0),
  }

  componentDidMount() {
    Animated.sequence([
      Animated.timing(
        this.state.cardAnimation,
        {
          toValue: 1,
          duration: 2000,
        }
      ),
      Animated.timing(
        this.state.guideAnimation,
        {
          toValue: 1,
          duration: 1000,
        }
      )
    ]).start();
  }

  _onPressCard() {
    // Animated.sequence([
    Animated.timing(
      this.state.cardAnimation,
      {
        toValue: 0,
        duration: 1000,
      },
    ).start();
    // ]).start();
  }

  render() {
    let { cardAnimation, guideAnimation } = this.state;

    return (
      <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <Animated.View style={{
          opacity: cardAnimation,
        }}>
          <TouchableOpacity onPress={this._onPressCard}>
            <Image source={require("../assets/tarot.jpg")}></Image>
          </TouchableOpacity>
        </Animated.View>
        <Animated.View style={{
          opacity: guideAnimation,
        }}>
          <Text>Tap Your Fortune Card</Text>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


