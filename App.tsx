import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { RoutineItem } from './src/components/Routine/Item';
import { Background } from './src/components/background';
import { EditSvg } from './src/components/svg/EditSvg';
import { PlusSvg } from './src/components/svg/PlusSvg';



export default function App() {
  const routineItemSelector = 'my-2';

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
        <View className="border border-solid border-gray-300 mr-4 mb-1" />

        <TouchableOpacity className="absolute bottom-5 right-5 bg-purple-700 rounded-full h-14 w-14 flex justify-center items-center z-10">
          <PlusSvg width="30" height="30" color="white" />
        </TouchableOpacity>

        <ScrollView className="pr-4">
          <RoutineItem className={routineItemSelector} />
          <RoutineItem className={routineItemSelector} />
          <RoutineItem className={routineItemSelector} />
          <RoutineItem className={routineItemSelector} />
          <RoutineItem className={routineItemSelector} />
          <RoutineItem className={routineItemSelector} />
          <RoutineItem className={routineItemSelector} />
          <RoutineItem className={routineItemSelector} />
          <RoutineItem className={routineItemSelector} />
        </ScrollView>
      </View>
      <StatusBar style="light" />
    </Background>
    
  );
}