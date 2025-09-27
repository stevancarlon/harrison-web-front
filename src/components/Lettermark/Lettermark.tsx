import { Image } from '../Image';
import LettermarkPNG from '@/assets/brand/Lettermark.png';

export const Lettermark = ({ width = 24 }: { width?: number | string }) => {
  return <Image src={LettermarkPNG} width={width} alt="Lettermark" />;
};
