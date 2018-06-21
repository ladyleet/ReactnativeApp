import React from 'react';
import { Button } from 'react-native';
import styled from 'styled-components';

export default class Purple extends React.Component {
  render() {
    return (
      <PurpleView>
        <Button
          title="🦄 🦄 🦄 🦄 🦄 🦄 🦄 🦄 🦄 🦄"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <TextCenter>💜 🍇 👾 💜 🍇 👾 💜 🍇 👾 💜 🍇</TextCenter>
        <TextCenter>💜 🍇 👾 💜 🍇 👾 💜 🍇 👾 💜 🍇</TextCenter>
        <TextCenter>💜 🍇 👾 💜 🍇 👾 💜 🍇 👾 💜 🍇</TextCenter>
        <TextCenter>💜 🍇 👾 💜 🍇 👾 💜 🍇 👾 💜 🍇</TextCenter>
        <TextCenter>💜 🍇 👾 💜 🍇 👾 💜 🍇 👾 💜 🍇</TextCenter>
        <TextCenter>💜 🍇 👾 💜 🍇 👾 💜 🍇 👾 💜 🍇</TextCenter>
        <TextCenter>💜 🍇 👾 💜 🍇 👾 💜 🍇 👾 💜 🍇</TextCenter>
        <TextCenter>💜 🍇 👾 💜 🍇 👾 💜 🍇 👾 💜 🍇</TextCenter>
        <TextCenter>💜 🍇 👾 💜 🍇 👾 💜 🍇 👾 💜 🍇</TextCenter>
        <TextCenter>💜 🍇 👾 💜 🍇 👾 💜 🍇 👾 💜 🍇</TextCenter>
        <TextCenter>You Made It To The End Of The Rainbow</TextCenter>
        <TextCenter>💜 🍇 👾 💜 🍇 👾 💜 🍇 👾 💜 🍇</TextCenter>
        <TextCenter>💜 🍇 👾 💜 🍇 👾 💜 🍇 👾 💜 🍇</TextCenter>
        <TextCenter>💜 🍇 👾 💜 🍇 👾 💜 🍇 👾 💜 🍇</TextCenter>
        <TextCenter>💜 🍇 👾 💜 🍇 👾 💜 🍇 👾 💜 🍇</TextCenter>
        <TextCenter>💜 🍇 👾 💜 🍇 👾 💜 🍇 👾 💜 🍇</TextCenter>
        <TextCenter>💜 🍇 👾 💜 🍇 👾 💜 🍇 👾 💜 🍇</TextCenter>
        <TextCenter>💜 🍇 👾 💜 🍇 👾 💜 🍇 👾 💜 🍇</TextCenter>
        <TextCenter>💜 🍇 👾 💜 🍇 👾 💜 🍇 👾 💜 🍇</TextCenter>
        <TextCenter>💜 🍇 👾 💜 🍇 👾 💜 🍇 👾 💜 🍇</TextCenter>
        <TextCenter>💜 🍇 👾 💜 🍇 👾 💜 🍇 👾 💜 🍇</TextCenter>
      </PurpleView>
    );
  }
}

const PurpleView = styled.View`
  background: #e1bfff;
  flex: 1;
  justify-content: center;
`;

const TextCenter = styled.Text`
  text-align: center;
`;
