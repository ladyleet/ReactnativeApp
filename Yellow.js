import React from 'react';
import { Button, Text } from 'react-native';
import styled from 'styled-components';

export default class Yellow extends React.Component {
  render() {
    return (
      <YellowView>
        <Button
          title="🦄 🦄 🦄"
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
        <Text>
          💛 🌼 ⭐ 💛 
          <Button 
          title="💚 ☘️ 🍏"
          onPress={() => this.props.navigation.navigate('Green')}
          />
          🌼 ⭐ 💛 🌼
        </Text>
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
`;

const TextCenter = styled.Text`
  text-align: center;
`;

{/* <TextCenter>💚 ☘️ 🍏</TextCenter>
        <TextCenter>💙 🦋 🐳</TextCenter>
        <TextCenter>💜 🍇 👾</TextCenter> */}