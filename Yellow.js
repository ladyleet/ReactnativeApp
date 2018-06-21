import React from 'react';
import { Button } from 'react-native';
import styled from 'styled-components';

export default class Yellow extends React.Component {
  render() {
    return (
      <YellowView>
        <Button
          title="🦄 🦄 🦄 🦄 🦄 🦄 🦄 🦄 🦄 🦄"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <TextCenter>💛 🌼 ⭐ 💛 🌼 ⭐ 💛 🌼 ⭐ 💛 🌼</TextCenter>
        <TextCenter>💛 🌼 ⭐ 💛 🌼 ⭐ 💛 🌼 ⭐ 💛 🌼</TextCenter>
        <TextCenter>💛 🌼 ⭐ 💛 🌼 ⭐ 💛 🌼 ⭐ 💛 🌼</TextCenter>
        <TextCenter>💛 🌼 ⭐ 💛 🌼 ⭐ 💛 🌼 ⭐ 💛 🌼</TextCenter>
        <TextCenter>💛 🌼 ⭐ 💛 🌼 ⭐ 💛 🌼 ⭐ 💛 🌼</TextCenter>
        <TextCenter>💛 🌼 ⭐ 💛 🌼 ⭐ 💛 🌼 ⭐ 💛 🌼</TextCenter>
        <TextCenter>💛 🌼 ⭐ 💛 🌼 ⭐ 💛 🌼 ⭐ 💛 🌼</TextCenter>
        <TextCenter>💛 🌼 ⭐ 💛 🌼 ⭐ 💛 🌼 ⭐ 💛 🌼</TextCenter>
        <TextCenter>💛 🌼 ⭐ 💛 🌼 ⭐ 💛 🌼 ⭐ 💛 🌼</TextCenter>
        <TextCenter>💛 🌼 ⭐ 💛 🌼 ⭐ 💛 🌼 ⭐ 💛 🌼</TextCenter>
        <Button 
        title="💚 ☘️ 🍏 💚 ☘️ 🍏 💚 ☘️ 🍏 💚"
        onPress={() => this.props.navigation.navigate('Green')}
        />
        <TextCenter>💛 🌼 ⭐ 💛 🌼 ⭐ 💛 🌼 ⭐ 💛 🌼</TextCenter>
        <TextCenter>💛 🌼 ⭐ 💛 🌼 ⭐ 💛 🌼 ⭐ 💛 🌼</TextCenter>
        <TextCenter>💛 🌼 ⭐ 💛 🌼 ⭐ 💛 🌼 ⭐ 💛 🌼</TextCenter>
        <TextCenter>💛 🌼 ⭐ 💛 🌼 ⭐ 💛 🌼 ⭐ 💛 🌼</TextCenter>
        <TextCenter>💛 🌼 ⭐ 💛 🌼 ⭐ 💛 🌼 ⭐ 💛 🌼</TextCenter>
        <TextCenter>💛 🌼 ⭐ 💛 🌼 ⭐ 💛 🌼 ⭐ 💛 🌼</TextCenter>
        <TextCenter>💛 🌼 ⭐ 💛 🌼 ⭐ 💛 🌼 ⭐ 💛 🌼</TextCenter>
        <TextCenter>💛 🌼 ⭐ 💛 🌼 ⭐ 💛 🌼 ⭐ 💛 🌼</TextCenter>
        <TextCenter>💛 🌼 ⭐ 💛 🌼 ⭐ 💛 🌼 ⭐ 💛 🌼</TextCenter>
        <TextCenter>💛 🌼 ⭐ 💛 🌼 ⭐ 💛 🌼 ⭐ 💛 🌼</TextCenter>
      </YellowView>
    );
  }
}

const YellowView = styled.View`
  background: #faffb0;
  flex: 1;
  justify-content: center;
`;

const TextCenter = styled.Text`
  text-align: center;
`;