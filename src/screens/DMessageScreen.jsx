import * as React from 'react';
import { Text, View } from 'react-native';
import { AuthContext } from '../context/AuthContext';

export default function Settings() {
  
  //const value = React.useContext(AuthContext);

  return (

    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!
         
      </Text>
    </View>

  );
}