import { Button } from '@/components/Form/Button';
import { EditSvg } from '@/components/Svg/Edit';
import { TrashSvg } from '@/components/Svg/Trash';
import { Text, View } from 'react-native';

interface Props {
  className?: string
}
export const RoutineItemEdit = (props: Props) => {
  return (
    <View className="flex flex-row items-center justify-between flex-wrap border border-solid border-gray-300 p-2 rounded-sm" {...props}>
      <Text className="text-sm">Beber água</Text>
      <View className="flex flex-row items-center justify-between gap-1">
        <Button onPress={() => ''} className="bg-blue-500 p-2" classText="text-white">
          <EditSvg strokeWidth={1.7} width="20" height="20" color="white" />
        </Button>
        <Button onPress={() => ''} className="bg-red-500 p-2" classText="text-white">
          <TrashSvg strokeWidth={1.7} width="20" height="20" color="white" />
        </Button>
      </View>
    </View>
  );
}