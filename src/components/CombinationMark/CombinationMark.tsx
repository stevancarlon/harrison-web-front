import { Image } from '@/components';
import CombinationMarkPNG from '@/assets/brand/CombinationMark.png';

export const CombinationMark = ({
  width = 120,
  height = 120,
}: {
  width?: number;
  height?: number;
}) => {
  return (
    <Image
      src={CombinationMarkPNG}
      width={width}
      height={height}
      alt="Harrison Logo"
    />
  );
};
