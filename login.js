import React from 'react';
import {  Text, TextInput, View, Alert, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, NativeBaseProvider } from 'native-base';

const basic = () => {
  return (
    <NativeBaseProvider style={styles.container}>

        <Text style={styles.text}>Welcome to My App</Text>

        <TextInput style={styles.textbox}
          //defaultValue="Name me!"
          placeholder='Enter username'
          //placeholderTextColor={'red'}
        />

        <TextInput style={styles.textbox}
          placeholder='Enter password' secureTextEntry      // secureTextEntry - hidden pwd
        />

        <TouchableOpacity onPress={() => Alert.alert('TouchableOpacity was clicked!')}>  
            <Text  style={{fontSize: 16, textAlign:'center', marginVertical:15}}>Show</Text>  
        </TouchableOpacity>  

        <Button
          //title="Click here"
          color={'red'}
          onPress={() => Alert.alert('Button was clicked!')}    // onPress and alert() - Show the popup while pressing the btn
        >Click Me!</Button>

    </NativeBaseProvider>
  );
}

const styles =  StyleSheet.create({
  text: {textAlign:'center', fontSize:24, color:"green", marginVertical:15},
  textbox : {height: 40, borderColor:'blue', borderWidth: 1, fontSize: 18, marginVertical:15},
  container: {flex: 1,  flexDirection: 'column',  width: "100%",  backgroundColor:"#5ead97"}  
});

export default basic;