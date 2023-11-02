import { Path, Svg } from "react-native-svg";
import { ComumProps } from "./type";

export const PlusSvg = (props: ComumProps) => {

  return (
    <Svg viewBox="0 0 24 24" {...props} stroke={props.color ?? 'white'} stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <Path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <Path d="M12 5l0 14" />
      <Path d="M5 12l14 0" />
    </Svg>
  );
}