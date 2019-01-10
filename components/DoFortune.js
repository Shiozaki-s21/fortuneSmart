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
    fadeAnim: new Animated.Value(0),
  }

  componentDidMount() {
    Animated.timing(
      this.state.fadeAnim,
      {
        toValue: 1,
        duration: 2000,
      }
    ).start();
  }

  render() {
    let { fadeAnim } = this.state;
    return (
      <Animated.View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        opacity: fadeAnim,
      }}>

        <Image source={require("../assets/tarot.jpg")}></Image>

      </Animated.View>
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


