import React from 'react';
import { Button } from 'react-native';
import styled from 'styled-components';

export default class Blue extends React.Component {
  render() {
    return (
      <BlueView>
        <Button
          title="🦄 🦄 🦄 🦄 🦄 🦄 🦄 🦄 🦄 🦄"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <TextCenter>💙 🦋 🐳 💙 🦋 🐳 💙 🦋 🐳 💙 🦋</TextCenter>
        <TextCenter>💙 🦋 🐳 💙 🦋 🐳 💙 🦋 🐳 💙 🦋</TextCenter>
        <TextCenter>💙 🦋 🐳 💙 🦋 🐳 💙 🦋 🐳 💙 🦋</TextCenter>
        <TextCenter>💙 🦋 🐳 💙 🦋 🐳 💙 🦋 🐳 💙 🦋</TextCenter>
        <TextCenter>💙 🦋 🐳 💙 🦋 🐳 💙 🦋 🐳 💙 🦋</TextCenter>
        <TextCenter>💙 🦋 🐳 💙 🦋 🐳 💙 🦋 🐳 💙 🦋</TextCenter>
        <TextCenter>💙 🦋 🐳 💙 🦋 🐳 💙 🦋 🐳 💙 🦋</TextCenter>
        <TextCenter>💙 🦋 🐳 💙 🦋 🐳 💙 🦋 🐳 💙 🦋</TextCenter>
        <TextCenter>💙 🦋 🐳 💙 🦋 🐳 💙 🦋 🐳 💙 🦋</TextCenter>
        <TextCenter>💙 🦋 🐳 💙 🦋 🐳 💙 🦋 🐳 💙 🦋</TextCenter>
        <Button 
        title="💜 🍇 👾 💜 🍇 👾 💜 🍇 👾 💜"
        onPress={() => this.props.navigation.navigate('Purple')}
        />
        <TextCenter>💙 🦋 🐳 💙 🦋 🐳 💙 🦋 🐳 💙 🦋</TextCenter>
        <TextCenter>💙 🦋 🐳 💙 🦋 🐳 💙 🦋 🐳 💙 🦋</TextCenter>
        <TextCenter>💙 🦋 🐳 💙 🦋 🐳 💙 🦋 🐳 💙 🦋</TextCenter>
        <TextCenter>💙 🦋 🐳 💙 🦋 🐳 💙 🦋 🐳 💙 🦋</TextCenter>
        <TextCenter>💙 🦋 🐳 💙 🦋 🐳 💙 🦋 🐳 💙 🦋</TextCenter>
        <TextCenter>💙 🦋 🐳 💙 🦋 🐳 💙 🦋 🐳 💙 🦋</TextCenter>
        <TextCenter>💙 🦋 🐳 💙 🦋 🐳 💙 🦋 🐳 💙 🦋</TextCenter>
        <TextCenter>💙 🦋 🐳 💙 🦋 🐳 💙 🦋 🐳 💙 🦋</TextCenter>
        <TextCenter>💙 🦋 🐳 💙 🦋 🐳 💙 🦋 🐳 💙 🦋</TextCenter>
        <TextCenter>💙 🦋 🐳 💙 🦋 🐳 💙 🦋 🐳 💙 🦋</TextCenter>
      </BlueView>
    );
  }
}

const BlueView = styled.View`
  background: #d0ddff;
  flex: 1;
  justify-content: center;
`;

const TextCenter = styled.Text`
  text-align: center;
`;