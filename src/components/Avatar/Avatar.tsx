import { Box } from '../Box';
import { Image } from '../Image';

type AvatarProps = {
  height: number;
  width: number;
  source: any;
};

export const Avatar = ({ height, width, source }: AvatarProps) => {
  return (
    <Box
      display="inline-block"
      borderRadius="full"
      overflow="hidden"
      className="justify-start items-start"
      style={{
        height,
        width,
      }}
    >
      <Image src={source} width={width} height={height} />
    </Box>
  );
};
