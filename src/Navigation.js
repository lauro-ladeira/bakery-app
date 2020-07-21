import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";

import HomeScreen from "./screens/Home";
import PedidosScreen from "./screens/Pedidos";
import ReceitasScreen from "./screens/Receitas";

const Tab = createBottomTabNavigator();

const icons = {
  Home: {
    lib: MaterialIcons,
    name: "home",
  },
  Receitas: {
    lib: FontAwesome5,
    name: "list-alt",
  },
  Pedidos: {
    lib: MaterialIcons,
    name: "event-note",
  },
  Contato: {
    lib: MaterialIcons,
    name: "account-box",
  },
};

const tabBarOptions = {
  activeTintColor: '#EEEEEE',
  inactiveTintColor: '#BBBBBB',
  labelStyle: {
    fontSize: 12,
  },
  style: { 
    backgroundColor: '#2D3047',
    height: 70,
    paddingBottom: 10
  },
};

export default function Navigation() {
  return (
    <Tab.Navigator
      tabBarOptions={tabBarOptions}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const { lib: Icon, name } = icons[route.name];
          return <Icon name={name} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Início",
        }}
      />
      <Tab.Screen
        name="Receitas"
        component={ReceitasScreen}
        options={{
          title: "Receitas",
        }}
      />
      <Tab.Screen
        name="Pedidos"
        component={PedidosScreen}
        options={{
          title: "Pedidos",
        }}
      />
      <Tab.Screen
        name="Contato"
        component={ReceitasScreen}
        options={{
          title: "Contato",
        }}
      />
    </Tab.Navigator>
  );
}
