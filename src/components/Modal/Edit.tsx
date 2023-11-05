import { Pressable, ScrollView, Text } from "react-native";
import { Button } from "../Form/Button";
import { RoutineItemEdit } from "../Routine/Item/edit";
import { Modal } from "./index";
import { ComumPropsModal } from "./types";

export const EditModal = (props: ComumPropsModal) => {

  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose} className="flex-1">
      <Text className="text-lg font-bold text-yellow-500 text-center">Editar Rotinas do Dia</Text>

      <Text className="text-sm mt-5">Rotinas:</Text>
      <ScrollView className="h-[300px] border-solid border border-gray-300 px-2 py-1 rounded-sm w-full flex">
        <Pressable>
          <RoutineItemEdit className="my-2" />
          <RoutineItemEdit className="my-2" />
          <RoutineItemEdit className="my-2" />
          <RoutineItemEdit className="my-2" />
          <RoutineItemEdit className="my-2" />
          <RoutineItemEdit className="my-2" />
          <RoutineItemEdit className="my-2" />
        </Pressable>
      </ScrollView>

      <Text className="text-sm mt-1 text-red-400">Segure a rotina para move-la de lugar</Text>

      <Button className="bg-blue-500 mt-5" classText="text-white" onPress={props.onClose}>
        Salvar
      </Button>
    </Modal>
  );
}