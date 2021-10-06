import { colors } from 'app/constants/contants';
import Loader from 'react-loader-spinner';

export const CustomLoader = ({
  type = 'TailSpin',
  color = colors.primary,
  height = 200,
  width = 200,
}: CustomLoaderProps) => <Loader type={type} color={color} height={height} width={width} />;

interface CustomLoaderProps {
  type?: 'ThreeDots' | 'Circles' | 'TailSpin' | 'Puff' | 'Bars';
  color?: string;
  height?: number;
  width?: number;
}
