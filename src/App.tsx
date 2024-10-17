import './presentation/navigator/gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { StackNavigator } from "./presentation/navigator/StackNavigator";
import { MySafeArea } from './presentation/components/ui/MySafeArea';

export const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>
  )
}