import { Text, TextInput, View } from 'react-native';

interface Props {
  className?: string
  label?: string
  value?: string
  onChange?: (value: string) => void
  placeholder?: string
}

export const Input = (props: Props) => {

  return (
    <View className="w-full flex flex-col mt-4">
      { props.label && (<Text className="text-gray-700 text-base font-bold">{props.label}</Text>) }
      <TextInput
        value={props.value}
        onChangeText={props.onChange}
        className="border border-solid border-gray-400 rounded-md p-2 mt-1"
        placeholder={props.placeholder}
      />
    </View>
  );
}