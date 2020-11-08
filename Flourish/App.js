'use strict'
import * as React from 'react';
import {View, Image} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import FlourishingTabScreen from './Tabs/FlourishingTabScreen'
import GardenTabScreen from './Tabs/GardenTabScreen'
import PlantpediaTabScreen from './Tabs/PlantpediaTabScreen'
import SettingsTabScreen from './Tabs/SettingsTabScreen'

const ActiveTintColor = "#ef5e85"
const InactiveTintColor = "#cacaca"
let myPlants = [
    {
        'id': '0',
        'name': 'The Green Ball',
        'task': 'Watering',
        'freq': 7,
        'date': new Date('November 1, 2020 03:24:00')
    },
    {
        'id': '1',
        'name': 'The Red Ball',
        'task': 'Watering',
        'freq': 7,
        'date': new Date('May 4, 2020 17:29:03')
    },
    {
        'id': '2',
        'name': 'The Blue Ball',
        'task': 'Watering',
        'freq': 7,
        'date': new Date(Date.now())
    },
    {
        'id': '3',
        'name': 'The Orange Ball',
        'task': 'Watering',
        'freq': 7,
        'date': new Date('November 3, 2018 22:44:53')
    },

]

const FlourishingTabScreenGenerator = () => {
    return (
        <FlourishingTabScreen plants={myPlants}/>
    );
}

const GardenTabScreenGenerator = () => {
    return (
        <GardenTabScreen plants={myPlants}/>
    );
}

const PlantpediaTabScreenGenerator = () => {
    return (
        <PlantpediaTabScreen />
    );
}

const SettingsTabScreenGenerator = () => {
    return (
        <SettingsTabScreen />
    );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator tabBarOptions={{
            activeTintColor: ActiveTintColor,
            inactiveTintColor: InactiveTintColor
        }}>
            <Tab.Screen
                name="Flourishing"
                component={FlourishingTabScreenGenerator}
                options={{
                    tabBarLabel: "Flourishing",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="water" color={color} size={size} />
                    ),
                    // tabBarBadge: 0,
                }}
            />
            <Tab.Screen
                name="Garden"
                component={GardenTabScreenGenerator}
                options={{

                    tabBarLabel: "Garden",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="flower" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Photo"
                component={PlantpediaTabScreenGenerator}
                // style={}
                options={{
                    tabBarLabel: " ",
                    tabBarIcon: () => (
                        <View style={{
                            position: 'absolute',
                            bottom: 0, // space from bottombar
                            height: 70,
                            width: 70,
                            borderRadius: 58,
                            backgroundColor: '#ffffff',
                            justifyContent: 'center',
                            alignItems: 'center',
                            shadowOpacity: 0.3,
                            shadowOffset:{width:0,height:0},
                            shadowColor: "#000000",
                        }}>
                            <Image
                                source={require("./assets/camera.png")}
                                style={{
                                    // width: 40,
                                    // height: 40,
                                    alignContent: 'center',
                                    position: 'absolute',
                                    bottom: 11, // space from bottombar
                                    height: 50,
                                    width: 50,
                                    borderRadius: 58,
                                    justifyContent: 'center',
                                    alignItems: 'center',

                                }}
                            />
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Plantpedia"
                component={PlantpediaTabScreenGenerator}
                options={{
                    tabBarLabel: "Plantpedia",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="magnify" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Settings"
                component={SettingsTabScreenGenerator}
                options={{
                    tabBarLabel: "Settings",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="tune" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    );
}

// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import TabNavigation from './TabNavigation'
//
// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//       <TabNavigation />
//     </View>
//   );
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
