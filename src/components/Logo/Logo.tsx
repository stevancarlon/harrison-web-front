import { Image } from '../Image';
import LogoPNG from '@/assets/brand/Logo.png';

export const Logo = ({
  width = 24,
  height = 24,
}: {
  width?: number;
  height?: number;
}) => {
  return (
    <Image src={LogoPNG} width={width} height={height} alt="Harrison Logo" />
  );
};
