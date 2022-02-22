import React, { Component } from 'react';  
import { Button, Text, TextInput, View, Alert, StyleSheet, TouchableOpacity, Image } from 'react-native'; 

export default class sample2 extends Component 
{  

    constructor(props) 
    {  
        super(props);  
        this.state = {  
            password: '',  
            isPasswordVisible: true,  
            toggleText: 'Show', 
        };  
    }  
    handleToggle = () => {  
        const { isPasswordVisible } = this.state;  
        if (isPasswordVisible) {  
            this.setState({ isPasswordVisible: false });  
            this.setState({ toggleText: 'Hide' });  
        } else {  
            this.setState({ isPasswordVisible: true });  
            this.setState({ toggleText: 'Show' });  
        }  
    };  

    render() {  

        //let imagePath = { uri: 'https://img.icons8.com/ios/100/000000/chicago.png'}; 
        return (
            <View style={styles.container}>
               
                <View style={styles.imgContainer}>
                    <Image source={{uri:'https://img.icons8.com/ios/100/000000/chicago.png'}} style={styles.image} />
                </View>

                <Text style={styles.text}>Welcome to My App</Text>

                <TextInput style={styles.textbox}
                //defaultValue="Name me!"
                placeholder='Enter username'
                placeholderTextColor={'white'}
                />

                <TextInput style={styles.textbox}
                placeholder='Enter password' 
                placeholderTextColor={'white'}
                secureTextEntry={this.state.isPasswordVisible} 
                />

                <TouchableOpacity onPress={this.handleToggle}>
                    <Text style={{ fontSize: 17, marginBottom:15, color:'white', textAlign:'center'}}>{this.state.toggleText}</Text>  
                </TouchableOpacity>   

                <Button
                title="Click here"
                color={'red'}
                onPress={() => Alert.alert('Button was clicked!')} 
                />

            </View >
        );
    }
}


const styles =  StyleSheet.create({
  text: {textAlign:'center', fontSize:24, color:"blue", marginVertical:15},
  textbox : {height: 40, borderColor:'blue', borderWidth: 1, fontSize: 18, marginVertical:15},
  container: {flex: 1,  flexDirection: 'column',  width: "100%",  backgroundColor:"#5ead97" } ,
  image: {tintColor :'white' , width: 100, height: 100, margin:20},
  imgContainer : {justifyContent: 'center', alignItems: 'center'}
});
