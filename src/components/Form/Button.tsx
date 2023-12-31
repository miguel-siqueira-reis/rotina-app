import { GestureResponderEvent, Text, TouchableOpacity } from 'react-native';

interface Props {
  className?: string
  classText?: string
  onPress: (event: GestureResponderEvent) => void
  children: React.JSX.Element | string
  color?: string
}

export const Button = (props: Props) => {
  
    return (
      <TouchableOpacity 
        className={"flex items-center justify-center rounded-md p-3 mt-4 " + props.className} 
        {...props}
      >
        <Text className={props.classText}>
          {props.children}
        </Text>
      </TouchableOpacity>
    );
}