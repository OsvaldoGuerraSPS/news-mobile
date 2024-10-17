import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../screens/home/HomeScreen";
import { DetailScreen } from "../screens/detail/DetailScreen";
import { News } from "../../domain/model/news";

export type RootStackParams = {
    HomeScreen: undefined;
    DetailScreen: { news: News };
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >   
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="DetailScreen" component={DetailScreen} />
        </Stack.Navigator>
    )
}
