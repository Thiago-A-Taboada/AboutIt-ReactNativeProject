import * as React from 'react';
import { Text, View, FlatList } from 'react-native';
import { ActivityIndicator, Button, Card, List, Title } from 'react-native-paper';
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
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', margin: 10 }}>
      <Text>Olá, usuario</Text>
       {/*  {auth.authData ? auth.authData.user : '...'} */}
      
      {/* <Button mode='contained' onPress={() => auth.signOut()}>saiiiiir</Button>
 */}

       <ActivityIndicator animating={isLoading} />
      <FlatList
        style={{ color: "black", borderWidth: 10, borderColor: 'pink' }}
        data={users}
        renderItem={({ item }) => (
          /*   <View>
              <Text>{(item.title)}</Text>
              
            </View> */
          <Card style={{width: 360}}>
           <Card.Title title="22222222" subtitle={item.idUser}/>
            <Card.Content></Card.Content>
          </Card>
        )}

      />
      

    </View>
  );
}