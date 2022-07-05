import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { Appbar, Avatar, Text, TextInput } from 'react-native-paper'
import { AuthContext, useAuth } from '../context/AuthContext'
import InputContent from '../components/InputContent'
import ButtonContent from '../components/ButtonContent'
import { CommonActions } from '@react-navigation/native'

export default function ProfileScreen({ navigation }) {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const { authData, loading } = React.useContext(AuthContext)
  const auth = useAuth();

  function handleSignOut() {
    auth.signOut()
  }

  function handleEditUser() {
    //auth.editUser(user, password);
    console.log(user, password)
  }

  return (
    <View>
      <Appbar.Header style={{ justifyContent: 'space-between', backgroundColor: '#343438' }}>
        <Appbar.BackAction onPress={() => navigation.dispatch(CommonActions.goBack())} />
        <Appbar.Content title="Meu Perfil"
        />
      </Appbar.Header>
      <Avatar.Image size={185} style={{ marginTop: 55, marginLeft: 'auto', marginRight: 'auto', marginBottom: 40 }} />
      <Text style={{ textAlign: 'center', fontSize: 29 }}>{authData ? authData.user : 'User'}</Text>
      <View style={styles.labelAndInput}>
        <Text>Email:</Text>
        <TextInput
          onChangeText={setUser}
          placeholderTextColor='#6F757A'
          placeholder={authData ? authData.user : ''}
          style={styles.input}
          bottomLine={false}
          underlineColor={'none'} />
      </View>
      <View style={styles.labelAndInput}>
        <Text>Senha:</Text>
        <TextInput
          onChangeText={setPassword}
          style={styles.input}
          placeholder="*******"
          placeholderTextColor='#6F757A'
          bottomLine={false}
          underlineColor={'none'} />
      </View>
      <ButtonContent onPress={()=> handleEditUser()} label="Salvar" buttonBackgroundColor="#707AE5"  />
      <ButtonContent onPress={()=> handleSignOut()} label="Encerrar Sessão" mode="text" buttonBackgroundColor="transparent" />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    width: 240,
    height: 40,
    borderRadius: 4,
    backgroundColor: '#343438',
    placeholder: '#EBECFF'
  },
  labelAndInput: {
    width: 300,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 40,
    marginLeft: 'auto',
    marginRight: 'auto',

  }
})