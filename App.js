import { StatusBar } from "expo-status-bar";
import { Button, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useLayoutEffect } from "react";
import { SparklesIcon } from "react-native-heroicons/solid";

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <View className="flex-1 items-center bg-white justify-center">
      <SparklesIcon color="red" size={42} />

      <Button
        onPress={() => navigation.navigate("Detail")}
        title="Go To Details"
      />
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View className="flex-1 items-center bg-white justify-center">
      <Text>Details Screen</Text>
      <Button
        onPress={() => navigation.push("Detail")}
        title="Go To Details Again"
      />
    </View>
  );
}

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: "Overview" }}
          />
          <Stack.Screen name="Detail" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </>
  );
}
