
import React from 'react';
import { Button,StyleSheet, SafeAreaView, ScrollView,Text, View } from 'react-native';
import SPCard from '../components/SPCard';
import {NavigationContainer} from '@react-navigation/native';
import SPProfileCard from '../components/SPProfileCard';
import SPDetail from '../components/SPDetail';



export default function CustomerSPView({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      
        
        <ScrollView style={styles.workingSection}>
           <SPProfileCard/>
           <SPDetail subject={"Email"} text={"Seyan@gmail.com"}/>
           <SPDetail subject={"Address"} text={"Jaffna"}/>
           <SPDetail subject={"Contact No"} text={"0248625895"}/>
           <Button
            onPress={()=>{navigation.navigate("SPBooking");}}
            title="Book Now"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
            />
        </ScrollView>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F3F3',
    
  },
  
  
  workingSection:{
    paddingTop:20,
    paddingHorizontal:10,
    height:600,
    
  },
});
