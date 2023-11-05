
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

import { RoutineItensListScreen } from '@/screens/RoutineItensList';
import { Background } from './src/components/background';


export default function App() {

  return (
    <Background>
      <View className="screens_list">
        <RoutineItensListScreen />
      </View>
      
      <StatusBar style="light" />
    </Background>
  );
}