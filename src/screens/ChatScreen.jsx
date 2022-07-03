import { View, StyleSheet} from "react-native"
import { Appbar, Text, TextInput } from "react-native-paper"
import { CommonActions, useNavigation } from '@react-navigation/native';
import MessageContent from "../components/MessageContent";

export default function ChatScreen({route}) {
    const navigation = useNavigation(); 
    const { name, msg } = route.params;
    return (
        <View style={{flex: 1}}>
            <Appbar.Header style={{backgroundColor: '#343438'}}>
                <Appbar.BackAction onPress={() => navigation.dispatch(CommonActions.goBack())} />
                <Appbar.Content title={name} />
            </Appbar.Header>
            <View>
            <MessageContent txt={msg} />
            </View>
            <View style={{ marginTop:"auto", paddingBottom:5}}>
                <TextInput placeholder="Mensagem" underlineColor={'none'} style={styles.textInput}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    textInput: {
        placeholder: '#ff0000',
        height:50,
        backgroundColor: "#757680",
        borderTopLeftRadius:50,
        borderTopRightRadius:50,
        borderBottomLeftRadius:50,
        borderBottomRightRadius:50,
    }
  });
  
