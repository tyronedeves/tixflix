import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from "@expo/vector-icons"

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#0a0a20',
          borderTopColor: '#333',
        },
        tabBarActiveTintColor: '#ff00ff',
        tabBarInactiveTintColor: '#8a8a8a',
      }}
    >
      <Tabs.Screen 
        name='index' 
        options={{
          title: 'Home',
          tabBarIcon: ({size, color}) => <Ionicons name="home" size={size} color={color} />
        }}
      />

      <Tabs.Screen 
        name='search' 
        options={{
          title: 'Search',
          tabBarIcon: ({size, color}) => <Ionicons name="search" size={size} color={color} />
        }}
      />

      <Tabs.Screen 
        name='profile' 
        options={{
          title: 'Profile',
          tabBarIcon: ({size, color}) => <Ionicons name="person" size={size} color={color} />
        }}
      />
    </Tabs>
  )
}

export default TabsLayout