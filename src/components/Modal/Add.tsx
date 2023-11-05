import { useState } from 'react';
import { Text, View } from 'react-native';
import { Button } from '../Form/Button';
import { Input } from '../Form/Input';
import { Modal } from './index';
import { ComumPropsModal } from './types';

export const AddModal = (props: ComumPropsModal) => {
  const [value, setValue] = useState('');

  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <View className="w-4/5 h-fit bg-white rounded-md p-4">
        <Text className="text-xl font-bold text-yellow-500 text-center">
          Adicionar uma Nova Rotina
        </Text>

        <Input onChange={setValue} value={value} label="Nome da Rotina" placeholder="ex. Beber água" />

        <Button className="bg-blue-500" classText="text-white" onPress={props.onClose}>
          Salvar
        </Button>
      </View>
    </Modal>
  );
}