import * as React from 'react';
import { View } from 'react-native';
import { TextInput, Text } from 'react-native-paper';
import { Button } from 'react-native-paper';

export default function Explore({ navigation }) {
  const [text, setText] = React.useState("");
  return (
    <View >
      <Text>Explore!</Text>


      <TextInput
        label=" Buscar"
        value={text}
        onChangeText={text => setText(text)}
      />
      <Text> </Text>
      <Button mode="contained" icon="text-search">
        Procurar
      </Button>
    </View>
  );
}