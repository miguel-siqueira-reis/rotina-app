
import { StatusBar } from 'expo-status-bar';

import { RoutineItensListScreen } from '@/screens/RoutineItensList';
import { Background } from './src/components/background';


export default function App() {

  return (
    <Background>
      <RoutineItensListScreen /> 
      
      <StatusBar style="light" />
    </Background>
  );
}