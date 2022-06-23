import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Appbar, TextInput } from 'react-native-paper';
 

export default function Upload({ navigation }) {
  return (
    <>
    <Appbar.Header style={{justifyContent: 'space-between'}}>
      <Appbar.Action icon="menu"/>
      <Appbar.Content title="Nova Publicação"/>
      <Appbar.Action icon="circle"/>
    </Appbar.Header>
      <View>
        <TextInput style={styles.inputTitle} placeholder='Um título...' />
        <TextInput placeholder='Descrição...' />
      </View>
    </>

  );
}


const styles = StyleSheet.create({
  inputTitle: {
    fontSize: 20,
    placeholder: '#6F757A',
    height: 200,
   
  }
})