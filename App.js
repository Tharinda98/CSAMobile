
import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView,Text, View } from 'react-native';
import SPCard from './components/SPCard';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator } from '@react-navigation/native-stack';
import CustomerHome from './screens/CustomerHome';
import CustomerSPView from './screens/CustomerSPView';
import SPBooking from './screens/SPBooking';

const Stack=createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
         <Stack.Screen name="Home" 
        component={CustomerHome}
        options={{title:'Welcome'}}/>
        <Stack.Screen name="SPView" 
        component={CustomerSPView}
        options={{title:'Service Provider Profile'}}/>
        <Stack.Screen name="SPBooking" 
        component={SPBooking}
        options={{title:'Service Provider Booking'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


