import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

// resources
import * as string from '../resources/string'

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{string.ThisIsHome}</Text>
        <Button
          title="Go to Fortune"
          onPress={() => this.props.navigation.navigate('DoFortuneScreen')}
        />
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
