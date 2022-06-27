import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Appbar, Button, IconButton, TextInput } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import { DrawerActions } from '@react-navigation/native';


export default function Upload({ navigation }) {
  const [image, setImage] = React.useState(null);

  async function pickImage() {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <>
      <Appbar.Header style={{ justifyContent: 'space-between' }}>
        <Appbar.Action icon="menu" onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        />
        <Appbar.Content title="Nova Publicação" />
        <Appbar.Action icon="circle" />
      </Appbar.Header>
      <View style={{ flex: 1 }}>
        <TextInput style={styles.inputTitle} color={'pink'} underlineColor={'none'} placeholder='Um título...' />
        <TextInput style={styles.input} placeholder='Descrição...' underlineColor={'none'} />

      </View>
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200, marginLeft: 'auto', marginRight: 'auto', borderRadius: 5 }} />}

      <Button textColor={'red'} style={{ fontSize: 100, }} icon='image' mode="contained" onPress={pickImage}>Adicionar imagem</Button>
    </>
  );
}


const styles = StyleSheet.create({
  inputTitle: {
    fontSize: 29,
    placeholder: '#6F757A',
    height: 200,
    color: '#6F757A',
    backgroundColor: 'transparent'
  },
  input: {
    fontSize: 29,
    backgroundColor: 'transparent',

  }
})