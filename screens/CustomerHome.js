
import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView,Text, View } from 'react-native';
import SPCard from '../components/SPCard';
import {NavigationContainer} from '@react-navigation/native';



export default function CustomerHome({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      
        
        <ScrollView style={styles.workingSection}>
          <SPCard name={"Seyan PVT Ltd"} address={"Jaffna"} rating={"4"} navigation={navigation}/>
          <SPCard name={"Nesamani painting PVT ltd"} address={"Colombo"} rating={"3"} navigation={navigation}/>
          <SPCard name={"BBKaththi PVT ltd"} address={"Jaffna"} rating={"2"} navigation={navigation}/>
          <SPCard name={"noone PVT ltd"} address={"Colombo"} rating={"3.5"} navigation={navigation}/>
          <SPCard name={"Tharinda PVT"} address={"Jaffna"} rating={"1"} navigation={navigation}/>
          <SPCard name={"Nesamani painting PVT ltd"} address={"Colombo"} rating={"4"} navigation={navigation}/>
          <SPCard name={"Seyan PVT Ltd"} address={"Jaffna"} rating={"2"} navigation={navigation}/>
          <SPCard name={"BBKaththi PVT ltd"} address={"Jaffna"} rating={"1"} navigation={navigation}/>
          <SPCard name={"noone PVT ltd"} address={"Colombo"} rating={"4"} navigation={navigation}/>

          
        </ScrollView>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F3F3',
    
  },
  viewWrapper:{
    paddingTop: 40,
    paddingHorizontal:20,
  },
  sectionTitle:{
    fontSize:24,
    fontWeight: 'bold'
  },
  workingSection:{
    paddingTop:20,
    paddingHorizontal:10,
    height:600,
    
  }
});
