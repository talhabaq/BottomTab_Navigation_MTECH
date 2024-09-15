import { View, Text, SafeAreaView, StatusBar, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './StackNavigation/Home'
import About from './StackNavigation/About'
import SignIn from './StackNavigation/SignIn'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'
import changeNavigationBarColor from 'react-native-navigation-bar-color'
const Tab = createBottomTabNavigator()

const getTabBarIcon = (routeName, focused, color, size) => {
  let iconName;
  if (routeName == 'Home') {
    iconName = focused ? "home" : "home-outline"
  }
  else if (routeName == 'SignIn') {
    iconName = focused ? "person" : "person-outline"
  }
  else if (routeName == 'About') {
    iconName = focused ? "book" : "book-outline"

  }
  return <Icon name={iconName} size={size} color={color} />
}
const App = () => {
  useEffect(() => {
    changeNavigationBarColor('blue', true)
  }, [])
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor='blue'
        hidden={false} />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => (
            {
              tabBarIcon: ({ focused, color, size }) => getTabBarIcon(route.name, focused, color, size),
              tabBarActiveTintColor: 'darkblue',
              tabBarInactiveTintColor: 'black',
              tabBarStyle: {
                paddingBottom: 5,
                height: 60
              },
              tabBarLabelStyle: {
                fontWeight: '700',
                fontSize: 13
              }
            }
          )}>
          <Tab.Screen name='SignIn' component={SignIn} options={{ headerShown: false }} />
          <Tab.Screen name='Home' component={Home} options={{ headerShown: false }} />
          <Tab.Screen name='About' component={About} />
        </Tab.Navigator>
      </NavigationContainer>

    </SafeAreaView>


  
  )
}

export default App
