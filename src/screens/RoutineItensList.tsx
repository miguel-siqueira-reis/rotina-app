import { AddModal } from '@/components/Modal/Add';
import { EditModal } from '@/components/Modal/Edit';
import { RoutineItem } from '@/components/Routine/Item/index';
import { EditSvg } from '@/components/Svg/Edit';
import { PlusSvg } from '@/components/Svg/Plus';
import { useModal } from '@/hooks/useModal';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

export const RoutineItensListScreen = () => {
  const routineItemSelector = 'my-2';

  const addModal = useModal();
  const editModal = useModal();
  
  return (
    <View className="flex-1 flex-col flex w-full h-full p-4 pr-0 bg-white">
      <View className="flex flex-row justify-between items-center pr-4 mb-3">
        <Text className="text-yellow-500 font-bold text-xl">Rotinas do dia:</Text>
        <TouchableOpacity onPress={editModal.onOpen} className="flex flex-row bg-blue-500 p-2 rounded-lg">
          <EditSvg width="20" height="20" color="white" />
          <Text className="text-white ml-1 font-bold mt-[1px]">Editar</Text>
        </TouchableOpacity>
        <EditModal isOpen={editModal.isOpen} onClose={editModal.onClose} />
      </View>
      <View className="border border-solid border-gray-300 mr-4 mb-1" />

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

      <TouchableOpacity onPress={() => addModal.onOpen()} className="absolute bottom-[40px] right-6 bg-purple-700 rounded-full h-14 w-14 flex justify-center items-center z-10">
        <PlusSvg width="30" height="30" color="white" />
      </TouchableOpacity>

      <AddModal isOpen={addModal.isOpen} onClose={addModal.onClose} />
    </View>
  );
}