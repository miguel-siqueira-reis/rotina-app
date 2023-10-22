import { Path, Svg } from "react-native-svg"
import { ComumProps as Props } from "./type"

export const NuvemSvg = (props: Props) => {
  const color = props.color || "white"

  return (
    <Svg viewBox="0 0 400 632" {...props}>
      <Path fill={color} d="M429.382,412.512c45.629,0,82.618-36.99,82.618-82.619c0-39.196-27.305-71.994-63.925-80.468  c-0.749-82.934-68.2-149.937-151.311-149.937c-57.06,0-106.735,31.585-132.518,78.221c-7.845-3.395-16.492-5.285-25.583-5.285  c-32.75,0-59.779,24.421-63.917,56.042C32.131,236.916,0,274.498,0,319.594c0,51.318,41.601,92.918,92.917,92.918  C107.211,412.512,419.589,412.512,429.382,412.512z"/>
    </Svg>
  )
}