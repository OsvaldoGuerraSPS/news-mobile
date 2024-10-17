import { SafeAreaProvider } from "react-native-safe-area-context"
import { HomeScreen } from "./presentation/screens/home/HomeScreen"

export const App = () => {
  return (
    <SafeAreaProvider>
      <HomeScreen/>
    </SafeAreaProvider>
  )
}