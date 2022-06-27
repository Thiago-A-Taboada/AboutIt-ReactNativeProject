import { StyleSheet, View } from "react-native"
import { Avatar, Text } from "react-native-paper"

export default function Message() {
    return (
        <View style={styles.container}>
            <View style={styles.avatarNameAndMessage}>
                <Avatar.Icon icon={'circle'} size={80} backgroundColor={'transparent'}/>
                <View style={styles.nameAndMessage}>
                    <Text style={styles.name}>Usuario</Text>
                    <Text style={styles.message}>Mensagem...</Text>
                </View>
            </View>
            <Text>22/08/2022</Text>
        </View>
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
        fontSize: 17
    },
    message: {
        fontSize: 15
    }
})