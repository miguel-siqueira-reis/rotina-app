import { CheckBox } from '@/components/Form/CheckBox';
import { useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';

interface Props {
  className?: string
}

export const RoutineItem = (props: Props) => {
  const [isDone, setIsDone] = useState(false);

  function doneTask() {
    setIsDone((value) => !value);
  }

  return (
    <TouchableOpacity onPress={doneTask} className="w-full flex items-center flex-row rounded-lg border border-solid border-gray-400 p-3 cursor-pointer" {...props}>
      <CheckBox checked={isDone} />
      <Text className={"text-gray-900 text-lg ml-3 " + (isDone ? 'line-through' : '') }>Aplicativo de rotina!</Text>
    </TouchableOpacity>
  );
}