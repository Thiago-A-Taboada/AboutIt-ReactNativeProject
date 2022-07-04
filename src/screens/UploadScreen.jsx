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
        <Appbar.Action icon="arrow-right" onPress={() => navigation.navigate('Home')}/>
      </Appbar.Header>
      <View style={{ flex: 1 }}>
        <TextInput 
          placeholderTextColor= '#6F757A' 
          style={styles.inputTitle} 
          underlineColor={'none'} 
          placeholder='Digite aqui...' 
        />

      </View>
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200, marginLeft: 'auto', marginRight: 'auto', borderRadius: 5 }} />}

      <Button labelStyle={{ color: "#6F757A", fontSize: 18 }}  style={{ fontSize: 100, backgroundColor: 'transparent', color: "red" }} icon='image' mode="text" onPress={pickImage}>Adicionar imagem</Button>
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