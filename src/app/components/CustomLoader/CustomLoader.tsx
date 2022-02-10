import { colors } from 'app/constants/constants';
import Loader from 'react-loader-spinner';

export const CustomLoader = ({
  type = 'TailSpin',
  color = colors.primary,
  height = 200,
  width = 200,
  msg = '',
}: CustomLoaderProps) => (
  <>
    <Loader type={type} color={color} height={height} width={width} />
    <p>{msg}</p>
  </>
);

interface CustomLoaderProps {
  type?: 'ThreeDots' | 'Circles' | 'TailSpin' | 'Puff' | 'Bars';
  color?: string;
  height?: number;
  width?: number;
  msg?: string;
}
