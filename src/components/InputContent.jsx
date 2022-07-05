import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper'

export default function InputContent(props) {
    return (
        <TextInput
            placeholderTextColor='#6F757A'
            style={styles.input}
            placeholder={props.placeholder}
            bottomLine={false}
            underlineColor={'none'}
        />
    )
}

const styles = StyleSheet.create({
    input: {
        width: 300,
        height: 40,
        borderRadius: 4,
        backgroundColor: '#343438',
        placeholder: '#EBECFF'
    }
})