import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Blue extends React.Component {
  render() {
    return (
      <View style = {styles.container}>
        <Button
          title="Take Me Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Text>This is Unicorn Blue</Text>
        <Button 
          title="Purple"
          onPress={() => this.props.navigation.navigate('Purple')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d0ddff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});