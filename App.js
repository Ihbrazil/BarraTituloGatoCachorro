import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';

import TelaGato from './componentes/TelaGato';
import TelaCachorro from './componentes/TelaCachorro';

const Tabs = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#4530b2'
          },
          headerTitleStyle: {
            color: '#fff',
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center',

          tabBarStyle: {
            backgroundColor: "#fff",
          },
          tabBarLabelStyle: {
            fontWeight: 'bold',
          },
          tabBarActiveBackgroundColor: "#ff7a00",
          tabBarActiveTintColor: "#fff",
        }}
      >
        <Tabs.Screen
          name="Gato"
          component={TelaGato}
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="cat" size={24} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="Cachorro"
          component={TelaCachorro}
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="dog" size={24} color={color} />
            ),
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}