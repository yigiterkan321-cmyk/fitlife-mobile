// App.js — Navigasyon kurulumu (Bottom Tabs + Stack)
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Icon from './src/components/Icon';
import HomeScreen from './src/screens/HomeScreen';
import WorkoutListScreen from './src/screens/WorkoutListScreen';
import WorkoutDetailScreen from './src/screens/WorkoutDetailScreen';
import ProgressScreen from './src/screens/ProgressScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import { colors } from './src/theme';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function WorkoutStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="WorkoutList" component={WorkoutListScreen} />
      <Stack.Screen name="WorkoutDetail" component={WorkoutDetailScreen} />
    </Stack.Navigator>
  );
}

const navTheme = {
  ...DefaultTheme,
  colors: { ...DefaultTheme.colors, background: colors.bg, card: colors.surface, border: colors.line },
};

const tabIcon = (name) => ({ color, size }) => <Icon name={name} size={size} color={color} sw={2} />;

export default function App() {
  return (
    <NavigationContainer theme={navTheme}>
      <StatusBar style="light" />
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: { backgroundColor: colors.surface, borderTopColor: colors.line, height: 64, paddingBottom: 8, paddingTop: 8 },
          tabBarActiveTintColor: colors.lime,
          tabBarInactiveTintColor: colors.muted,
          tabBarLabelStyle: { fontSize: 9.5, fontWeight: '600' },
        }}
      >
        <Tab.Screen name="Ana Sayfa" component={HomeScreen} options={{ tabBarIcon: tabIcon('home') }} />
        <Tab.Screen name="Antrenman" component={WorkoutStack} options={{ tabBarIcon: tabIcon('dumbbell') }} />
        <Tab.Screen name="İlerleme" component={ProgressScreen} options={{ tabBarIcon: tabIcon('chart') }} />
        <Tab.Screen name="Profil" component={ProfileScreen} options={{ tabBarIcon: tabIcon('user') }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
