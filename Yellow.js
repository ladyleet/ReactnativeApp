import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Yellow extends React.Component {
  render() {
    return (
      <View style = {styles.container}>
        <Button
          title="Take Me Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Text>This is Unicorn Yellow</Text>
        <Button 
          title="Green"
          onPress={() => this.props.navigation.navigate('Green')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#faffb0',
    alignItems: 'center',
    justifyContent: 'center',
  }
});