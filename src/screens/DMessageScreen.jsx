import { DrawerActions } from '@react-navigation/native';
import * as React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Appbar, Button, FAB, Text } from 'react-native-paper';
import Contact from '../components/Contact';
import { AuthContext } from '../context/AuthContext';
import json from '../../assets/messages.json';

export default function Settings({ navigation }) {
  const [contact, setContacts] = React.useState(null);
  //const value = React.useContext(AuthContext);

  React.useEffect(() => {
    setContacts(json)
  })


  return (
    <>
      <Appbar.Header style={{ justifyContent: 'space-between',  backgroundColor: '#343438' }}>
        <Appbar.Action icon="menu" onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        />
        <Appbar.Content title="Bate-papo" />
        <Appbar.Action icon='account-plus' onPress={() => navigation.navigate('AddContact')} />
      </Appbar.Header>
      {

      }
      {
        contact ?
          (<FlatList
            data={contact}
            renderItem={({ item }) => (
              <Contact
                name={item.username}
                lastMessage={item.lastMessage}
                date={item.date}
              />
            )}
          />) : (
            <Text style={styles.text}>
              Seus contatos e conversas aparecerão aqui
            </Text>

          )
      }
    </>

  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    textAlign: 'center',
    alignContent: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  fab: {
    position: 'absolute',
    margin: 20,
    right: 0,
    bottom: 0,
    width: 70,
    height: 70,
    paddingLeft: 5,
    paddingTop: 8
  }
})