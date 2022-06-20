import * as React from 'react';
import { Text, View, FlatList } from 'react-native';
import { ActivityIndicator, Avatar, Button, Card, List, Title } from 'react-native-paper';
import Post from '../components/Post';
import { useAuth } from '../context/AuthContext';

import json from '../../assets/post.json';

export default function Home({ navigation }) {
  const auth = useAuth()
  const [isLoading, setLoading] = React.useState(true);
  const [users, setUsers] = React.useState(json);
  console.log(users[1].title);
  //setUsers(json);

  /*   const getUsers = async () => {
  
      const response = await fetch('../../assets/post.json').then(res => res.json())
        .then(data => {
          setUsers(data)
        })
    } */

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Olá, usuario</Text>
       {/*  {auth.authData ? auth.authData.user : '...'} */}
      
      {/* <Button mode='contained' onPress={() => auth.signOut()}>saiiiiir</Button>
 */}

       <ActivityIndicator animating={isLoading} />
      <FlatList
        data={users}
        renderItem={({ item }) => (
            <Card style={{ marginVertical: 5, marginHorizontal: 0, paddingBottom: 17}}>
              <Card.Title left={(props) => <Avatar.Image {...props} source={{uri: item.thumbnailCommunity}} />} title={item.communityName} subtitle={item.idUser} />
              <Card.Content>
                <Title>{item.title}</Title>
              </Card.Content>
              <Card.Cover source={item.communityContent} />
            </Card>
        )}

      />

      

    </View>
  );
}