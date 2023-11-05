import { Modal as ModalNative, TouchableWithoutFeedback, View } from 'react-native';
import { ComumPropsModal } from './types';

interface Props extends ComumPropsModal {
  children: React.ReactNode
  className?: string
}

export const Modal = (props: Props) => {
  return (
    <ModalNative visible={props.isOpen} animationType="slide" transparent={true} className={props.className}>
      <TouchableWithoutFeedback onPress={props.onClose}>
        <View className="flex-1 items-center justify-center bg-[#0000008a]">
          <TouchableWithoutFeedback>
            <View className="w-4/5 h-fit bg-white rounded-md p-4">
              {props.children}
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </ModalNative>
  );
}