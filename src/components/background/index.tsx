// import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { View } from "react-native";
import { NuvemSvg } from "../svg/NuvemSvg";
import { SolSvg } from "../svg/SolSvg";

interface Props {
  children: React.ReactNode
}

export const Background = ({ children }: Props) => {
  const [isNight, setIsNight] = useState(false);

  return (
    <View className={`flex-1 justify-end transition-[background] duration-300 ease-in-out ${isNight ? 'bg-black' : 'bg-[#b7eaff]'}`}>
      <View>
        <NuvemSvg color="rgba(255, 255, 255, 0.7)" width="120px" height="120px" className="absolute top-[110px] right-[70px]" />
        <NuvemSvg color="rgba(255, 255, 255, 0.7)" width="120px" height="120px" className="absolute top-[70px] left-[30px]" />
      </View>
      <SolSvg width="120px" height="120px" className="absolute top-16 left-[35%] block shadow-2xl shadow-[#FF9800] rounded-full" />
      <View>
        <NuvemSvg width="120px" height="120px" className="absolute top-[100px] right-[60px]" />
        <NuvemSvg width="120px" height="120px" className="absolute top-[60px] left-[40px]" />
      </View>

      <View className="w-full h-[70vh] flex mt-auto">
        {children}
      </View>
    </View>
  )
}

{/* <LinearGradient start={{x: 0, y: 1}} end={{x: 1, y: 0}}  colors={colors} className="flex-1 justify"> */}