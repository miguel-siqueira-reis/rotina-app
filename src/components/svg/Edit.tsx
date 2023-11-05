import { Path, Svg } from "react-native-svg";
import { ComumPropsSvg } from "./type";

export const EditSvg = (props: ComumPropsSvg) => {

  return (
    <Svg viewBox="0 0 24 24" {...props} stroke={props.color ?? 'white'} stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <Path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <Path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" />
      <Path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" />
      <Path d="M16 5l3 3" />
    </Svg>
  );
}

