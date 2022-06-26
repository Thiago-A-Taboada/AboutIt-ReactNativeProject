import { View } from "react-native"
import { IconButton, Text } from "react-native-paper"

export default function ProfileItem(props) {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <IconButton icon={props.icon} />
            <Text>{props.title}</Text>
        </View>
    )
}
