import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

export default function ButtonContent(props) {
  return (
    <Button
    uppercase={false}
     mode='contained'
     style={styles.btn}
     contentStyle={{height: 53}}
     >
        {props.label}
        </Button>
  )
}

const styles = StyleSheet.create({
    btn: {
        width: 300,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 50,
    
    }
})