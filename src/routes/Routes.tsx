import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { Background } from "../components/Background/Background";
import { SignIn } from "../screens/SignIn/SingIn";

import { AuthRoutes } from "./auth.routes";
import { useAuth } from "../hooks/auth";

export function Routes() {
  const { user } = useAuth()
  return (
    <NavigationContainer>
      {
        user.id
        ? <AuthRoutes />
        : <SignIn />
      }
    </NavigationContainer>
  )
}