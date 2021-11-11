import React, { useState } from 'react';
import {Image,View, Text, StyleSheet, TouchableOpacity}  from 'react-native';

export default function SPProfileCard({navigation}){

    return(
        <View style={styles.card}>
            <View>
                <Image style={styles.profilePic} source={require('E:/ACADEMIC_MORA/MY_ACA/MY_ACA_SEM_5/SEP/Tharinda-Mobile/CSA_Mobile/assets/1.png')}/>
            </View>
            <Text style={styles.SPName}>
                Seyan PVT ltd
            </Text>
            <Text style={styles.owner}>
                Seyan
            </Text>

        </View>
    );
}

const styles=StyleSheet.create({
    card:{
        backgroundColor:'#FFF',
        padding:20,
        borderRadius:10,
        height:250,
        // flexDirection:'row',
        //alignItems: 'center',
       
        marginBottom: 20,
    },
    profilePic:{
        alignSelf:'center',
        width:150,
        height:150,
        backgroundColor:'#55BCF6',
        opacity:0.4,
    },
    SPName:{
        paddingTop: 25,
        alignSelf:'center',
        fontSize:24,
        fontWeight: 'bold'
    },
    owner:{
        alignSelf:'center',
    },

});