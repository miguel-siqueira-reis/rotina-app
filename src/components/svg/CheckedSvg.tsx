import { Path, Svg } from "react-native-svg";
import { ComumProps } from "./type";

export const CheckedSvg = (props: ComumProps) => {

  return (
    <Svg viewBox="0 0 24 24" {...props} stroke={props.color ?? 'white'} stroke-width="3" fill="none">
      <Path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <Path d="M5 12l5 5l10 -10" />
    </Svg>
  );
}