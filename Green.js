import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import styled from 'styled-components';

export default class Green extends React.Component {
  render() {
    return (
      <GreenView>
        <Button
          title="🦄 🦄 🦄 🦄 🦄 🦄 🦄 🦄 🦄 🦄"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <TextCenter>💚 ☘️ 🍏 💚 ☘️ 🍏 💚 ☘️ 🍏 💚 ☘️</TextCenter>
        <TextCenter>💚 ☘️ 🍏 💚 ☘️ 🍏 💚 ☘️ 🍏 💚 ☘️</TextCenter>
        <TextCenter>💚 ☘️ 🍏 💚 ☘️ 🍏 💚 ☘️ 🍏 💚 ☘️</TextCenter>
        <TextCenter>💚 ☘️ 🍏 💚 ☘️ 🍏 💚 ☘️ 🍏 💚 ☘️</TextCenter>
        <TextCenter>💚 ☘️ 🍏 💚 ☘️ 🍏 💚 ☘️ 🍏 💚 ☘️</TextCenter>
        <TextCenter>💚 ☘️ 🍏 💚 ☘️ 🍏 💚 ☘️ 🍏 💚 ☘️</TextCenter>
        <TextCenter>💚 ☘️ 🍏 💚 ☘️ 🍏 💚 ☘️ 🍏 💚 ☘️</TextCenter>
        <TextCenter>💚 ☘️ 🍏 💚 ☘️ 🍏 💚 ☘️ 🍏 💚 ☘️</TextCenter>
        <TextCenter>💚 ☘️ 🍏 💚 ☘️ 🍏 💚 ☘️ 🍏 💚 ☘️</TextCenter>
        <TextCenter>💚 ☘️ 🍏 💚 ☘️ 🍏 💚 ☘️ 🍏 💚 ☘️</TextCenter>
        <Button 
        title="💙 🦋 🐳 💙 🦋 🐳 💙 🦋 🐳 💙"
        onPress={() => this.props.navigation.navigate('Blue')}
        />
        <TextCenter>💚 ☘️ 🍏 💚 ☘️ 🍏 💚 ☘️ 🍏 💚 ☘️</TextCenter>
        <TextCenter>💚 ☘️ 🍏 💚 ☘️ 🍏 💚 ☘️ 🍏 💚 ☘️</TextCenter>
        <TextCenter>💚 ☘️ 🍏 💚 ☘️ 🍏 💚 ☘️ 🍏 💚 ☘️</TextCenter>
        <TextCenter>💚 ☘️ 🍏 💚 ☘️ 🍏 💚 ☘️ 🍏 💚 ☘️</TextCenter>
        <TextCenter>💚 ☘️ 🍏 💚 ☘️ 🍏 💚 ☘️ 🍏 💚 ☘️</TextCenter>
        <TextCenter>💚 ☘️ 🍏 💚 ☘️ 🍏 💚 ☘️ 🍏 💚 ☘️</TextCenter>
        <TextCenter>💚 ☘️ 🍏 💚 ☘️ 🍏 💚 ☘️ 🍏 💚 ☘️</TextCenter>
        <TextCenter>💚 ☘️ 🍏 💚 ☘️ 🍏 💚 ☘️ 🍏 💚 ☘️</TextCenter>
        <TextCenter>💚 ☘️ 🍏 💚 ☘️ 🍏 💚 ☘️ 🍏 💚 ☘️</TextCenter>
        <TextCenter>💚 ☘️ 🍏 💚 ☘️ 🍏 💚 ☘️ 🍏 💚 ☘️</TextCenter>
      </GreenView>
    );
  }
}

const GreenView = styled.View`
  background: #c0ffb6;
  flex: 1;
  justify-content: center;
`;

const TextCenter = styled.Text`
  text-align: center;
`;