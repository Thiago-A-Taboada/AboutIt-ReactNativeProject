import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, Text } from 'react-native-paper';
import ProfileItem from './ProfileItem';
import json from '../../assets/post.json';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function CustomDrawerContent(props) {
    const [users, setUsers] = React.useState(json);

    const navigation = useNavigation(); 

    return (
        <DrawerContentScrollView style={{ backgroundColor: '#232326' }}>
            <View style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', borderWidth: 0 }}>
                <Avatar.Icon size={120} icon="circle" backgroundColor="transparent" />
                <Text style={{ fontSize: 25, color: '#B6B9D9' }}>Fulano</Text>
            </View>

            <ProfileItem title="Meu Perfil" icon="account" />
            <TouchableOpacity onPress={() => navigation.navigate('CreateCommunity')}>
                <ProfileItem title="Criar uma comunidade" icon="forum" />
            </TouchableOpacity>

            <DrawerItemList {...props} />
            <Text style={{ marginLeft: 10, marginTop: 40, marginBottom: 20 }}>
                Minhas Comunidades
            </Text>

            {users.map((i) => {
                return (<DrawerItem style={styles.itemList} key={i.id} label={i.communityName} />)
            })}
        </DrawerContentScrollView>

    )
}


const styles = StyleSheet.create({
    itemList: {

    }
})