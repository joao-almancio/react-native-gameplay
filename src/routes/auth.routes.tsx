import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Home } from '../screens/Home/Home';
import { SignIn } from "../screens/SignIn/SingIn";
import { AppointmentDetails } from "../screens/AppointmentDetails/AppointmentDetails";
import { AppointmentCreate } from "../screens/AppointmentCreate/AppointmentCreate";

import { theme } from "../global/styles/theme";

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator
    headerMode="none"
    screenOptions={{
      cardStyle: {
        backgroundColor: theme.colors.secondary100
      }
    }}
    >
      <Screen
        name="Home"
        component={Home}
      />
      <Screen
        name="AppointmentDetails"
        component={AppointmentDetails}
      />
      <Screen
        name="AppointmentCreate"
        component={AppointmentCreate}
      />
    </Navigator>
  )
}