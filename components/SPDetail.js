import React, { useState } from 'react';
import {View, Text, StyleSheet, TouchableOpacity}  from 'react-native';


export default function SPDetail(props){
    return(
        <View style={styles.detailForm}>
            <View style={styles.detail}>
                <Text style={styles.subject}>
                    {props.subject}:
                </Text>
                <Text style={styles.object}>
                    {props.text}
                </Text>
            </View>

            
            
        </View>
    );
}

const styles=StyleSheet.create({
    detailForm:{
        backgroundColor:'#FFF',
        padding:20,
        borderRadius:10,
        height:65,
        flexDirection:'row',
        //alignItems: 'center',
       
        marginBottom: 20,
    },
    detail:{
         flexDirection:'row',
    },
    subject:{
        fontWeight: 'bold'
        
    },
    object:{
       textAlign:'center',
       paddingStart:25,
       
    },
});