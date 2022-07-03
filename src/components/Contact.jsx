import { useNavigation } from "@react-navigation/native";
import { Alert, StyleSheet, TouchableOpacity, View } from "react-native"
import { Avatar, Text } from "react-native-paper"

export default function Contact(props) {
    const navigation = useNavigation();



    return (
        <TouchableOpacity onPress={() => navigation.navigate('Chat', {name: props.name, msg: props.lastMessage})}>
            <View style={styles.container}>
                <View style={styles.avatarNameAndMessage}>
                    <Avatar.Icon icon={'circle'} size={80} backgroundColor={'transparent'} />
                    <View style={styles.nameAndMessage}>
                        <Text style={styles.name}>{props.name}</Text>
                        <Text style={styles.message}>
                            {props.lastMessage.length > 25 ?
                                props.lastMessage.slice(0, 25).concat('...')
                                :
                                props.lastMessage}
                        </Text>
                    </View>
                </View>
                <View style={styles.date}>
                    <Text>{props.date}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        height: 82,
        backgroundColor: '#343438',
        paddingRight: 15,
    },
    avatarNameAndMessage: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    nameAndMessage: {
        flexDirection: 'column',

    },
    name: {
        fontSize: 17,

    },
    message: {
        fontSize: 14,
    },
    date: {
        position: 'absolute',
        right: 5,
        height: 80,
        width: 90,
        justifyContent: 'center',
        alignItems: 'center'
    }
})