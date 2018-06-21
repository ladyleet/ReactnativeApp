import React from 'react';
import { Button, Text } from 'react-native';
import styled from 'styled-components';

export default class Red extends React.Component {
  render() {
    return (
      <RedView>
        <Button
          title="🦄 🦄 🦄 🦄 🦄 🦄 🦄 🦄 🦄 🦄"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <TextCenter>❤️ 🌹 🌶 ❤️ 🌹 🌶 ❤️ 🌹 🌶 ❤️ 🌹</TextCenter>
        <TextCenter>❤️ 🌹 🌶 ❤️ 🌹 🌶 ❤️ 🌹 🌶 ❤️ 🌹</TextCenter>
        <TextCenter>❤️ 🌹 🌶 ❤️ 🌹 🌶 ❤️ 🌹 🌶 ❤️ 🌹</TextCenter>
        <TextCenter>❤️ 🌹 🌶 ❤️ 🌹 🌶 ❤️ 🌹 🌶 ❤️ 🌹</TextCenter>
        <TextCenter>❤️ 🌹 🌶 ❤️ 🌹 🌶 ❤️ 🌹 🌶 ❤️ 🌹</TextCenter>
        <TextCenter>❤️ 🌹 🌶 ❤️ 🌹 🌶 ❤️ 🌹 🌶 ❤️ 🌹</TextCenter>
        <TextCenter>❤️ 🌹 🌶 ❤️ 🌹 🌶 ❤️ 🌹 🌶 ❤️ 🌹</TextCenter>
        <TextCenter>❤️ 🌹 🌶 ❤️ 🌹 🌶 ❤️ 🌹 🌶 ❤️ 🌹</TextCenter>
        <TextCenter>❤️ 🌹 🌶 ❤️ 🌹 🌶 ❤️ 🌹 🌶 ❤️ 🌹</TextCenter>
        <TextCenter>❤️ 🌹 🌶 ❤️ 🌹 🌶 ❤️ 🌹 🌶 ❤️ 🌹</TextCenter>
        <Button 
          title="💛 🌼 ⭐ 💛 🌼 ⭐ 💛 🌼 ⭐ 💛"
          onPress={() => this.props.navigation.navigate('Yellow')}
        />
        <TextCenter>❤️ 🌹 🌶 ❤️ 🌹 🌶 ❤️ 🌹 🌶 ❤️ 🌹</TextCenter>
        <TextCenter>❤️ 🌹 🌶 ❤️ 🌹 🌶 ❤️ 🌹 🌶 ❤️ 🌹</TextCenter>
        <TextCenter>❤️ 🌹 🌶 ❤️ 🌹 🌶 ❤️ 🌹 🌶 ❤️ 🌹</TextCenter>
        <TextCenter>❤️ 🌹 🌶 ❤️ 🌹 🌶 ❤️ 🌹 🌶 ❤️ 🌹</TextCenter>
        <TextCenter>❤️ 🌹 🌶 ❤️ 🌹 🌶 ❤️ 🌹 🌶 ❤️ 🌹</TextCenter>
        <TextCenter>❤️ 🌹 🌶 ❤️ 🌹 🌶 ❤️ 🌹 🌶 ❤️ 🌹</TextCenter>
        <TextCenter>❤️ 🌹 🌶 ❤️ 🌹 🌶 ❤️ 🌹 🌶 ❤️ 🌹</TextCenter>
        <TextCenter>❤️ 🌹 🌶 ❤️ 🌹 🌶 ❤️ 🌹 🌶 ❤️ 🌹</TextCenter>
        <TextCenter>❤️ 🌹 🌶 ❤️ 🌹 🌶 ❤️ 🌹 🌶 ❤️ 🌹</TextCenter>
        <TextCenter>❤️ 🌹 🌶 ❤️ 🌹 🌶 ❤️ 🌹 🌶 ❤️ 🌹</TextCenter>
      </RedView>
    );
  }
}

const RedView = styled.View`
  background: #ffd6d6;
  flex: 1;
  justify-content: center;
`;

const TextCenter = styled.Text`
  text-align: center;
`