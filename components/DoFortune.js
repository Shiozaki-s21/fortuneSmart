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
          <Image source={require("../assets/tarot.jpg")}></Image>
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


