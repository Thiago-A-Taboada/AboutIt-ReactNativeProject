import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function MessageContent(props) {
  return (
    <View style={styles.msg}>
      <Text style={styles.txt}>{props.txt}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    msg: {
        backgroundColor: '#343438',
        color: 'white',
        alignSelf: 'flex-start',
        textAlign: 'center',
        padding: 10,
        height: 'auto',
        minHeight: 40,
        marginTop: 20,
        marginLeft: 5,
        borderRadius: 12
    },
    txt : {
        color: 'white',
        marginTop: 'auto',
        marginBottom: 'auto'
    }
})