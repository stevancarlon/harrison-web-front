interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  width?: number;
  height?: number;
}

export const Image = ({ src, width, height, ...props }: ImageProps) => {
  return <img src={src} width={width} height={height} {...props} />;
};
