import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper'

export default function InputContent(props) {
    return (
        <TextInput
            style={styles.input}
            placeholder={props.placeholder}
            bottomLine={false}
            underlineColor={'none'} 
        />
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        width: 300,
        marginTop: 59,
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: '#343438',
        placeholder: '#EBECFF'
    }
})