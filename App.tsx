import React from 'react';
import { StyleSheet, Text, View, Button, ImageBackground, Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen'
import Cart from './screens/Cart'
import Account from './screens/Account'
import ExpandedItem from './screens/ExpandedItem'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { IAppState } from './redux/store';
import { Provider } from 'react-redux';
import { IAppActions } from './redux/actions';
import { createStore, Store } from 'redux';
import { reducers } from './redux/reducers';
import Toast from 'react-native-toast-message';


//Begin stack navigator functionality -- take care 
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

//Init store
const store: Store<IAppState, IAppActions> = createStore(reducers);


const BottomNavigator: React.FC = () => {
  //Pull cart count from store
  const cartCount = useSelector((state: IAppState) => state.cartCount);

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
      <Tab.Screen
        name="Explore"
        component={HomeScreen}
        options={{
          headerRight: () => (
            <Image
              source={require('./assets/hypercube.png')}
              style={styles.smallimage}
            />
          ),
        }} />
      <Tab.Screen name="Account" component={Account}
        options={{
          headerRight: () => (
            <Image
              source={require('./assets/hypercube.png')}
              style={styles.smallimage}
            />
          ),
        }}
      />
      <Tab.Screen name="Cart" component={Cart} options={{
        tabBarBadge: cartCount,
        headerRight: () => (
          <Image
            source={require('./assets/hypercube.png')}
            style={styles.smallimage}
          />
        ),
      }} />
    </Tab.Navigator>
  )
}

export const GoToButton: React.FC<any> = ({ screenName }) => {
  const navigation = useNavigation();
  return (
    <Button
      title={`Go to Account`}
      onPress={() => navigation.navigate(screenName)}
    />
  );
}




const App: React.FC = () => {
  return (
    <Provider store={store}>

      <NavigationContainer>
        <Stack.Navigator>

          <Stack.Screen
            name="BottomTabs"
            component={BottomNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ExpandedItem"
            component={ExpandedItem}
          />
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{

              headerRight: () => (
                <Button
                  onPress={() => alert('This is a button!')}
                  title="Info"
                  color="#fff"
                />
              ),
            }}

          />
        </Stack.Navigator>
      </NavigationContainer>

      <Toast ref={(ref: any) => Toast.setRef(ref)} />

    </Provider>

  );
}
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  smallimage: {
    width: 40,
    height: 40,
    alignSelf: 'flex-end',
    marginRight: 12
  }

});
