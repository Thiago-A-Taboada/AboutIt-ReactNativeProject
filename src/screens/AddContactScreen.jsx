import { View, Text } from 'react-native'
import React from 'react'
import { Appbar } from 'react-native-paper'
import { CommonActions } from '@react-navigation/native'
import InputContent from '../components/InputContent'
import ButtonContent from '../components/ButtonContent'

export default function AddContactScreen({ navigation }) {
  return (
    <>
      <Appbar.Header style={{ justifyContent: 'space-between', backgroundColor: '#343438' }}>
        <Appbar.BackAction onPress={() => navigation.dispatch(CommonActions.goBack())} />
        <Appbar.Content title="Adicionar Contato"
        />
      </Appbar.Header>
      <View style={{ marginTop: 59, marginLeft: 'auto', marginRight: 'auto' }} >
        <InputContent width={300} placeholder="digite o nome" />
        <ButtonContent label="Buscar" />
      </View>

    </>
  )
}