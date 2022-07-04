import * as React from 'react';
import { Text, View, FlatList } from 'react-native';
import { ActivityIndicator, Appbar, Avatar, Button, Card, Drawer, List, Searchbar, Title } from 'react-native-paper';
import Post from '../components/Post';
import { useAuth } from '../context/AuthContext';
import { createDrawerNavigator } from '@react-navigation/drawer';
import json from '../../assets/post.json';
import { DrawerActions } from '@react-navigation/native';



export default function Home({ navigation }) {
  const auth = useAuth()
  const [isLoading, setLoading] = React.useState(false);
  const [users, setUsers] = React.useState(json);

  //setUsers(json);

  /*   const getUsers = async () => {
  
      const response = await fetch('../../assets/post.json').then(res => res.json())
        .then(data => {
          setUsers(data)
        })
    } */


  return (
    <>

      <Appbar.Header style={{ justifyContent: 'flex-start' }}>
        <Appbar.Action icon="menu"
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />
        <Searchbar style={{ width: 280, backgroundColor: '#232326' }} placeholder="Buscar" />
      </Appbar.Header>

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {/*  {auth.authData ? auth.authData.user : '...'} */}

        {/* <Button mode='contained' onPress={() => auth.signOut()}>saiiiiir</Button>
 */}
        <ActivityIndicator animating={isLoading} />
        <FlatList
          data={users}
          renderItem={({ item }) => (
            
            <Card style={{ marginVertical: 5, marginHorizontal: 0, paddingBottom: 17 }}>
              <Card.Title left={(props) => <Avatar.Image {...props} source={{ uri: item.thumbnailCommunity }} />} title={item.communityName} subtitle={item.idUser} />
              <Card.Content>
                <Title>{item.title}</Title>
              </Card.Content>
              <Card.Cover source={{ uri: item.communityContent }} />
            </Card>
          )}

        />
      </View>
    </>
  );
}
