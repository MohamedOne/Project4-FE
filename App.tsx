import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen'
import Cart from './screens/Cart'
import Account from './screens/Account'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';


//Begin stack navigator functionality -- take care 
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function BottomNavigator() {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName: any;

        if (route.name === 'Explore') {
          iconName = 'globe';
        } else if (route.name === 'Cart') {
          iconName = 'ios-cart';
        } else if (route.name === 'Account') {
          iconName = 'log-in'
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'rgb(51, 51, 204)',
      tabBarInactiveTintColor: 'gray',
    })}
  >
    <Tab.Screen name="Explore" component={HomeScreen} />
    <Tab.Screen name="Account" component={Account} />
    <Tab.Screen name="Cart" component={Cart} />
  </Tab.Navigator>
  )
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen 
          name="BottomTabs" 
          component={BottomNavigator}  
          options={{ headerShown: false }}  
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
