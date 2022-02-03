import React from 'react';
import { Image } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AccountNavigation from './AccountNavigation';
import PokedexNavigation from './PokedexNavigation';
import FavoriteNavigation from './FavoriteNavigation';

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Favorite' component={FavoriteNavigation} 
            options={{
                tabBarLabel: 'Favoritos',
                }}
            />
            <Tab.Screen name='Pokedex' component={PokedexNavigation} 
            options={{
                tabBarLabel: 'Pokemones',
                tabBarIcon: () => renderPokeball(),
            }} 
            />
            <Tab.Screen name='Account' component={AccountNavigation} 
            options={{
                tabBarLabel: 'Cuenta',
                }}
            />
        </Tab.Navigator>
    )
}

const renderPokeball = () => (
    <Image
      source={require('../assets/pokeball.png')}
      style={{ width: 65, height: 65, top:-20}}
    />
  )

