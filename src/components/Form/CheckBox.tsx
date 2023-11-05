import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { CheckedSvg } from "../Svg/Checked";

interface Props {
  checked?: boolean
  label?: string
  labelClassName?: string
  className?: string
}

export const CheckBox = (props: Props) => {
  const [isSelected, setSelection] = useState(props.checked ?? false);

  const handleCheckboxClick = () => {
    setSelection((value) => !value);
  };

  if (props.checked !== undefined && props.checked !== isSelected) {
    setSelection(props.checked);
  }

  const CheckedBox = props.checked !== undefined ? View as unknown as typeof TouchableOpacity : TouchableOpacity;
  
  return (
    <View className={"flex flex-row items-center gap-3 " + props.className}>
      <CheckedBox onPress={handleCheckboxClick} className="w-6 h-6 border border-solid border-gray-400 rounded-lg">
        <CheckedSvg height="20" width="20" color="green" className={"m-auto " + (isSelected ? 'flex' : 'hidden')} />
      </CheckedBox>
      {props.label && (<Text className={props.labelClassName}>{props.label}</Text>)}
    </View>
  )
}