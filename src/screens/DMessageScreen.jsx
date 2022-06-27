import { DrawerActions } from '@react-navigation/native';
import * as React from 'react';
import { FlatList, Text, View } from 'react-native';
import { Appbar } from 'react-native-paper';
import Message from '../components/Message';
import { AuthContext } from '../context/AuthContext';
import json from '../../assets/post.json';

export default function Settings({ navigation }) {
  const [users, setUsers] = React.useState(json);
  //const value = React.useContext(AuthContext);

  return (
    <>
      <Appbar.Header style={{ justifyContent: 'space-between' }}>
        <Appbar.Action icon="menu" onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        />
        <Appbar.Content title="Bate-papo" />
        <Appbar.Action icon="circle" />
      </Appbar.Header>
      <FlatList
        data={users}
        renderItem={({ item }) => (
          <Message />
        )}
      />




    </>

  );
}