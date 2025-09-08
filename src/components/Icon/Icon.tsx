import type { SVGProps } from 'react';
import { iconList, type IconName } from './IconList';

interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
}

export const Icon = ({ name, width = 28, ...rest }: IconProps) => {
  const iconProps: SVGProps<SVGSVGElement> = {
    width,
    ...rest,
  };

  const IconToRender = iconList[name];
  return <IconToRender {...iconProps} />;
};
