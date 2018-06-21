import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style = {styles.container}>
        <Text>Welcome to the Unicorn Rainbow</Text>
        <Button 
          title="Red"
          onPress={() => this.props.navigation.navigate('Red')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBAED2',
    alignItems: 'center',
    justifyContent: 'center',
  }
});