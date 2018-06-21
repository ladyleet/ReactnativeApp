import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Red extends React.Component {
  render() {
    return (
      <View style = {styles.container}>
        <Button
          title="Take Me Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Text>This is Unicorn Red</Text>
        <Button 
          title="Yellow"
          onPress={() => this.props.navigation.navigate('Yellow')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffd6d6',
    alignItems: 'center',
    justifyContent: 'center',
  }
});