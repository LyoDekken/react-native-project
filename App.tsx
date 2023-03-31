import { useFonts } from "expo-font";
import { View } from 'react-native';
import fonts from "./config/fonts";

const App = () => {
  const [fontsLoaded] = useFonts(fonts);

  return !fontsLoaded ? null :(
    <View>
      Hello World
    </View>
  );
}

export default App

