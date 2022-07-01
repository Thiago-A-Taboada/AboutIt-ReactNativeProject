import { View, StyleSheet} from "react-native"
import { Appbar, Text, TextInput } from "react-native-paper"
import { CommonActions, useNavigation } from '@react-navigation/native';

export default function ChatScreen() {
    const navigation = useNavigation(); 

    return (
        <View style={{flex: 1}}>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => navigation.dispatch(CommonActions.goBack())} />
                <Appbar.Content title="Usuario" />
            </Appbar.Header>
            <View>
                
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
  
