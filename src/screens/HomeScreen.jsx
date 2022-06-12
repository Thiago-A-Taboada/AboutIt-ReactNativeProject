import * as React from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import { useAuth } from '../context/AuthContext';

export default function Home({ navigation }) {
  const auth = useAuth()

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Olá,  
       <Text> {auth.authData ? auth.authData.user : '...'}</Text> 
      </Text>
      <Button mode='contained' onPress={() => auth.signOut()}>sair dessa porra</Button>
    </View>
  );
}