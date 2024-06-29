import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const InputField = ({ text, icon, setValue }) => {
    return (
        <View style={style.InputRow}>
            {icon}
            <TextInput
                onChangeText={(text) => setValue(text)}
                style={style.InputArea}
                placeholder={text}>
            </TextInput>

        </View>
    )
}

const style = StyleSheet.create({
    InputRow: {
        flexDirection: 'row',
        width: '100%',
        height: 48,
        backgroundColor: '#f5f7f8',
        borderRadius: 70,
        alignItems: 'center',
        paddingHorizontal: 13,
        gap: 10,
        marginTop: 13,
        alignSelf: 'center'
    }, InputArea: {
        // backgroundColor: 'red',
        width: '86%',
        height: '100%'
    }
})
export default InputField