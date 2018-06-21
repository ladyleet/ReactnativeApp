import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Green extends React.Component {
  render() {
    return (
      <View style = {styles.container}>
        <Button
          title="Take Me Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Text>This is Unicorn Green</Text>
        <Button 
          title="Blue"
          onPress={() => this.props.navigation.navigate('Blue')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c0ffb6',
    alignItems: 'center',
    justifyContent: 'center',
  }
});