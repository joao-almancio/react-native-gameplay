import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { Background } from "../components/Background/Background";

import { AuthRoutes } from "./auth.routes";

export function Routes() {
  return (
    <NavigationContainer>
      <AuthRoutes />
    </NavigationContainer>
  )
}