import { View, Text } from 'react-native'
import { Appbar, Button, TextInput } from 'react-native-paper';
import React from 'react'
import { CommonActions, DrawerActions } from '@react-navigation/native';
import ButtonContent from '../components/ButtonContent';
import InputContent from '../components/InputContent';

export default function CreateCommunityScreen({ navigation }) {

    return (
        <>
            <Appbar.Header style={{ justifyContent: 'space-between', backgroundColor: '#343438'}}>
                <Appbar.BackAction onPress={() => navigation.dispatch(CommonActions.goBack())} />
                <Appbar.Content title="Criar Comunidade"
                />
            </Appbar.Header>
            <InputContent placeholder="Nome_da_comunidade" />
            <ButtonContent label="Salvar"/>
        </>
    )
}

