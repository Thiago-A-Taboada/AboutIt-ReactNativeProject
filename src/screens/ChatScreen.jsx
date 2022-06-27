import { View } from "react-native"
import { Appbar, Text, TextInput } from "react-native-paper"
import { CommonActions, useNavigation } from '@react-navigation/native';

export default function ChatScreen() {
    const navigation = useNavigation(); 

    return (
        <View>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => navigation.dispatch(CommonActions.goBack())} />
                <Appbar.Content title="Usuario" />
            </Appbar.Header>
            <View>
                <TextInput />
            </View>
        </View>
    )
}