
import { StatusBar } from 'expo-status-bar';
import { Text, TouchableOpacity, View } from 'react-native';

import { ListItensScreen } from '@/screens/ListItens';
import { Background } from './src/components/background';
import { EditSvg } from './src/components/svg/EditSvg';


export default function App() {


  return (
    <Background>
      <View className="flex-1 flex-col flex w-full p-4 pr-0 bg-white">
        <View className="flex flex-row justify-between items-center pr-4 mb-3">
          <Text className="text-yellow-500 font-bold text-xl">Rotinas do dia:</Text>
          <TouchableOpacity className="flex flex-row bg-blue-500 p-2 rounded-lg">
            <EditSvg width="20" height="20" color="white" />
            <Text className="text-white ml-1 font-bold mt-[1px]">Editar</Text>
          </TouchableOpacity>
        </View>

        <View className="screens_list">
          <ListItensScreen />
        </View>
        
        <StatusBar style="light" />
      </View>
    </Background>
    
  );
}