import { SvgProps } from 'react-native-svg';

export interface ComumPropsSvg extends SvgProps {
  width: string;
  height: string;
  className?: string;
  color?: string;
}