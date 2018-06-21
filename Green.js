import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import styled from 'styled-components';

export default class Green extends React.Component {
  render() {
    return (
      <GreenView>
        <Button
          title="Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Text>This is 🦄 Green</Text>
        <Button 
          title="Blue"
          onPress={() => this.props.navigation.navigate('Blue')}
        />
      </GreenView>
    );
  }
}

const GreenView = styled.View`
  background: #c0ffb6;
  flex: 1;
`;

const TextCenter = styled.Text`
  text-align: center;
`;
