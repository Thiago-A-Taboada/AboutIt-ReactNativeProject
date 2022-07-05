import * as React from "react";
import { Alert, StyleSheet, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import ButtonContent from "../components/ButtonContent";
import { AuthContext, AuthProvider, useAuth } from "../context/AuthContext";

import { CombinedDefaultTheme } from "../themes/AppTheme";

export default function SignInScreen({ navigation }) {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const auth = useAuth();

    function handleSignIn() {

        if (email.length > 0 && password.length > 0) {
            auth.signIn(email, password)
        } else if (email.length <= 0) {
            Alert.alert('digite o usuario')
        } else if (password.length <= 0) {
            Alert.alert('digite a senha')
        } else {
            auth.setAuthData(email, password)
        }


    }

    return (
        <View style={styles.container}>
            <TextInput
                value={email}
                onChangeText={setEmail}
                theme={{ dark: true, colors: { text: "#B6B9D9", primary: "#B6B9D9", background: "#232326", placeholder: "#B6B9D9" } }}
                style={styles.inputUser}
                label="Usuário"
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
            {/* <Text style={styles.textForget}>Esqueceu a senha?</Text> */}
            <Button
                uppercase={false}
                onPress={() => handleSignIn()}
                style={styles.button}
                labelStyle={{ color: "#FFF" }}
                contentStyle={{ height: 60, color: "red" }}
                mode="contained"
                theme={{ colors: { primary: "#707AE5" } }}>
                Entrar
            </Button>
            <ButtonContent onPress={() => navigation.navigate('Register')} mode="text" label="Não é cadastrado? Criar conta" />
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