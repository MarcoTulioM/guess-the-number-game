import React from "react";
import { View } from "react-native";

import Routes from "./Routes";
import Header from "./components/Header";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Header title="Guess the Number" />
      <Routes />
    </View>);
}
