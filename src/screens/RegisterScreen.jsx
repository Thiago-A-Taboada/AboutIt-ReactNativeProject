import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Button, TextInput } from 'react-native-paper'
import ButtonContent from '../components/ButtonContent';

export default function RegisterScreen({navigation}) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  return (
    <View style={styles.container}>
      <TextInput
        value={email}
        onChangeText={setEmail}
        theme={{ dark: true, colors: { text: "#B6B9D9", primary: "#B6B9D9", background: "#232326", placeholder: "#B6B9D9" } }}
        style={styles.inputUser}
        label="Usuário"
        placeholder="Digite um nome de usuário"
        mode="outlined"
      />
      <TextInput
        value={email}
        onChangeText={setEmail}
        theme={{ dark: true, colors: { text: "#B6B9D9", primary: "#B6B9D9", background: "#232326", placeholder: "#B6B9D9" } }}
        style={styles.inputUser}
        label="Email"
        placeholder="Digite seu email"
        mode="outlined"
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        theme={{ dark: true, colors: { text: "#B6B9D9", primary: "#B6B9D9", background: "#232326", placeholder: "#B6B9D9" } }}
        style={styles.inputPassword}
        label="Senha"
        placeholder="Digite sua senha"
        mode="outlined"
      />
      <Button
        uppercase={false}
        onPress={() => {}}
        style={styles.button}
        labelStyle={{ color: "#FFF" }}
        contentStyle={{ height: 60, color: "red" }}
        mode="contained"
        theme={{ colors: { primary: "#707AE5" } }}>
        Cadastrar
      </Button>
      <ButtonContent mode="text" label="Cancelar"  onPress={() => navigation.navigate('SignIn')}/>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    marginTop: "auto",
    marginBottom: "auto",
    marginLeft: "auto",
    marginRight: "auto",
    width: 300,

  },
  inputUser: {
    width: 300,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 55,

  },
  inputPassword: {
    width: 300,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 55,

  },
  textForget: {
    textAlign: "right",
    marginBottom: 22,
  },
  button: {
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 55,
    width: 300,
  },
  textRegister: {
    marginLeft: "auto",
    marginRight: "auto",
  },


})