import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Purple extends React.Component {
  render() {
    return (
      <View style = {styles.container}>
        <Button
          title="Take Me Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Text>This is Unicorn Purple</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e1bfff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});