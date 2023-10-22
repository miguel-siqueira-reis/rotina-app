import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Background } from './src/components/background';

export default function App() {
  return (
    <Background>
      <View className="flex-1 items-center justify-center bg-white">
        <Text className="text-red-500">Aplicativo de rotina!</Text>
        <StatusBar style="auto" />
      </View>
    </Background>
    
  );
}
