import { Modal as ModalNative, TouchableWithoutFeedback, View } from 'react-native';
import { ComumPropsModal } from './types';

interface Props extends ComumPropsModal {
  children: React.ReactNode
}

export const Modal = (props: Props) => {
  return (
    <ModalNative visible={props.isOpen} animationType="slide" transparent={true}>
      <TouchableWithoutFeedback onPress={props.onClose}>
        <View className="flex-1 items-center justify-center bg-[#0000008a]">
          <TouchableWithoutFeedback>
            {props.children}
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </ModalNative>
  );
}