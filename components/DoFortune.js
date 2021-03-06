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
    arcanaAnimation: new Animated.Value(0),
  }

  componentDidMount() {
    Animated.sequence([
      Animated.timing(
        this.state.cardAnimation,
        {
          toValue: 1,
          duration: 1500,
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
    Animated.sequence([
      Animated.timing(
        this.state.cardAnimation,
        {
          toValue: 0,
          duration: 1000,
        },
      ),
      Animated.timing(
        this.state.arcanaAnimation,
        {
          toValue: 1,
          duration: 1500,
        }
      )
    ]).start();
  }

  render() {
    let { cardAnimation, guideAnimation, arcanaAnimation } = this.state;

    return (
      <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        {/* 初期カード */}
        <Animated.View style={{
          opacity: cardAnimation,
        }}>
          <TouchableOpacity onPress={this._onPressCard}>
            <Image source={require("../assets/tarot.jpg")}></Image>
          </TouchableOpacity>
        </Animated.View>

        {/* 文字列:ここ押して */}
        <Animated.View style={{
          opacity: guideAnimation,
        }}>
          <Text>Tap Your Fortune Card</Text>
        </Animated.View>

        {/* アルカナ */}
        <Animated.View style={{
          opacity: arcanaAnimation,
        }}>
          <Image source={require("../assets/0.jpg")}></Image>
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



// TODO: レイヤのようにAnimatedを隠しておく方法がわからないので、結果は別画面実装とする
//       実装完了後、課題として再実装をする 


