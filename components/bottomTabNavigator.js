import * as React from 'react';
import {Image } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import HomeScreen from '../screens/home';
import Test from '../screens/test';
import CreateEvent from '../screens/createEvent';
import MyUpcomingEvents from '../screens/myEvents';
import NotificationScreen from '../screens/notifications';

export const AppTabNavigator = createBottomTabNavigator({
    Home : { screen: HomeScreen,
    navigationOptions: {
        tabBarIcon: 
        <Image source= {require("../assets/home.png")}
        style = {{
          width: 30,
          height:30
        }}></Image>,
        tabBarLabel: "Home"
    }},
    create: { screen: CreateEvent,
        navigationOptions: {
            tabBarIcon: 
            <Image source= {require("../assets/add.png")}
            style = {{
              width: 30,
              height:30
            }}></Image>,
            tabBarLabel: "Create Events"
    }},
    UpcomingEvents: { screen: MyUpcomingEvents,
        navigationOptions: {
            tabBarIcon: 
            <Image source= {require("../assets/upcoming.png")}
            style = {{
                width: 30,
                height:30
            }}></Image>,
            tabBarLabel: "My Events"
    }},
    Notifications: { screen: NotificationScreen,
        navigationOptions: {
            tabBarIcon: 
            <Image source= {require("../assets/notification.png")}
            style = {{
                width: 30,
                height:30
            }}></Image>,
            tabBarLabel: "Notifications"
        }}
  });
