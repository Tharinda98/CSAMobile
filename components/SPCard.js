import React, { useState } from 'react';
import {View,Image, Text, StyleSheet, TouchableOpacity}  from 'react-native';
// import StarRating from 'react-native-star-rating';
import {NavigationContainer} from '@react-navigation/native';

export default function SPCard(props) {
    //const [rating,setRating]=useState('');

    return(
        <TouchableOpacity onPress={()=>{props.navigation.navigate("SPView");}}
            style={styles.card}>
            <View >
                <Image style={styles.icon} source={require('E:/ACADEMIC_MORA/MY_ACA/MY_ACA_SEM_5/SEP/Tharinda-Mobile/CSA_Mobile/assets/1.png')}/>
            </View>
            <View style={styles.details}>

                
                    <Text style={styles.detailText}>
                    Service Provider:   {props.name}{"\n"}
                    Location             :   {props.address}{"\n"}
                    Ratings               :   {props.rating}{"\n"}
                    </Text>
                

                {/* <View style={styles.ratingView} >
                    <StarRating style={styles.ratingStyles} imageSize={1} disabled={true} maxStars={5} rating={3}/>
                </View>  */}

            </View>
        </TouchableOpacity>
    )
}

const styles=StyleSheet.create({
    card:{
        backgroundColor:'#FFF',
        padding:20,
        borderRadius:10,
        height:200,
        flexDirection:'row',
        //alignItems: 'center',
       
        marginBottom: 20,

    },
    icon:{
        alignSelf:'center',
        width:150,
        height:150,
        backgroundColor:'#55BCF6',
        opacity:0.4,
    },
    details:{
        alignSelf:'center',
    },
    detailText:{
        paddingLeft:10,
        
    },
    ratingView:{
        width:50,
        
        
    },
    ratingStyles:{
        height:10,
    },

});
