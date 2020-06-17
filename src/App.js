import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from './component/Login'
import Cadastrar from './component/Cadastrar';


function Home() {
  return (
    <Login/>
  )
}

function Register() {
  return (
    <Cadastrar/>
  )
}



const Drawer = createDrawerNavigator();

function MyDrawer() {
    return (
      <Drawer.Navigator>
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Registre-se" component={Register} />
      </Drawer.Navigator>

    )
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
