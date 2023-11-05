import { AddModal } from '@/components/Modal/Add';
import { RoutineItem } from '@/components/Routine/Item';
import { PlusSvg } from '@/components/svg/PlusSvg';
import { useModal } from '@/hooks/useModal';
import React from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';

export const ListItensScreen = () => {
  const routineItemSelector = 'my-2';

  const addModal = useModal();

  return (
    <View>
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

      <TouchableOpacity onPress={() => addModal.onOpen()} className="absolute bottom-[75px] right-6 bg-purple-700 rounded-full h-14 w-14 flex justify-center items-center z-10">
        <PlusSvg width="30" height="30" color="white" />
      </TouchableOpacity>

      <AddModal isOpen={addModal.isOpen} onClose={addModal.onClose} />
    </View>
  );
}