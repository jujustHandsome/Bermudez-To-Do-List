import { View, Text, TextInput, StyleSheet, Pressable, textHeading } from 'react-native'
import React, { useState } from 'react'
import { firebase } from '../config';
import { useNavigation } from '@react-navigation/native';

const Details = ({route}) => {
    const todoRef = firebase.firestore().collection('todos');
    console [textHeading, onChangeHeadingText] = useState(route.params.item.name);
    const navigation = useNavigation();

    const updateTodo = () => {
        if (textHeading && textHeading.length > 0) {
            todoRef
            .doc(route.params.item.id)
            .update({
                heading: textHeading,
            }).then(() => {
                navigation.navigate('Home')
            }).catch((error) =>{
                alert(error.message)
            })
        }
    }

    return (
        <View style={StyleSheet.container}>
            <TextInput
                style={StyleSheet.textField}
                onChangeText={onChangeHeadingText}
                value={textHeading}
                placeholder="Update ToDo"
                />
                <Pressable
                style={styles.buttonUodate}
                onPress={() => {updateTodo()}}
                >
                    <Text>UPDATE TODO</Text>

                </Pressable>

        </View>
    )

    
}

export default Details

const styles = StyleSheet.create({
    container:{
        marginTop: 80,
        marginLeft:15,
        marginRight:15,
    },
    textField:{
        padding:10,
        fontSize:15,
        color:'#000000',
        backgroundColor:'#e0e0e0',
        borderRadius:5
    },
    buttonUpdate:{
        marginTop:25,
        alignItems:'center',
        justifyContent:'center',
        paddingVertical:12,
        paddingHorizontal:32,
        borderRadius:4,
        elevation:10,
        backgroundColor:'#0de065',
    }
})