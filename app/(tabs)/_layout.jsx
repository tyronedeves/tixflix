import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import {Ionicons} from "@expo/vector-icons"

const RootLayout = () => {
  return (
    <Tabs

    screenOptions={{
        headerShown: false
    }}
    >

        <Tabs.Screen 
        name='index' 
        options={{tabBarIcon: ({size,color})=> <Ionicons name="home" size={size}color={color} />}}
        />

<Tabs.Screen 
        name='search' 
        options={{tabBarIcon: ({size,color})=> <Ionicons name="search" size={size}color={color} />}}
        />

<Tabs.Screen 
        name='profile' 
        options={{tabBarIcon: ({size,color})=> <Ionicons name="person" size={size}color={color} />}}
        />


        
    </Tabs>
  )
}

export default RootLayout