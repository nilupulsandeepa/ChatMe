import { SafeAreaView, Text } from "react-native";
import { ThemeProvider } from "./providers/ThemeProvider";
import LoginScreen from "./AuthScreen/LoginScreen";

const App = () => {
  return (
    <ThemeProvider>
      <LoginScreen />
    </ThemeProvider>
  )
}

export default App;