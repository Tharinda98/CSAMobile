import React from 'react';
import {Alert, Button,StyleSheet, SafeAreaView, ScrollView,Text,TextInput, View } from 'react-native';

export default function SPBooking(){
    return(
        <View >
            <View style={styles.formContainer}>
            <Text>
                Job Description
            </Text>
            <TextInput multiline numberOfLines={4} style={styles.input} />
            <Text>
                Address
            </Text>
            <TextInput  style={styles.input} />
            <Text>
                District
            </Text>
            <TextInput  style={styles.inputDistrict} />
            </View>
            <Button
            onPress={()=>{ Alert.alert("Succeddfully Booked The Service Provider");}}
            title="Book Now Service Provider"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
            />
        </View>
        

    );
}
const styles=StyleSheet.create({
    formContainer:{
        backgroundColor:'#FFF',
        padding:20,
        paddingTop:20,
        borderRadius:20,
        height:400,
        
    },
    input: {
        height: 80,
        margin: 12,
        borderWidth: 2,
        padding: 10,
    },
    inputDistrict:{
        height: 40,
        width:200,
        margin: 12,
        borderWidth: 2,
        padding: 10,
    }
});