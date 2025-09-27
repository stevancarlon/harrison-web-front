import { Avatar, Box, Icon } from '@/components';
import { Logo } from '@/components/Logo/Logo';
import Avatar1PNG from '@/assets/avatars/avatar_1.jpg';

export const Header = () => {
  return (
    <Box className="w-full bg-white px-6 py-8 flex flex-col items-center justify-center">
      <Logo width={32} height={32} />
      <Box className="flex items-center justify-between w-full">
        <Avatar height={52} width={52} source={Avatar1PNG} />
        <Box className="flex items-center gap-4">
          <Icon name="notificationBox" />
          <Icon name="search" />
        </Box>
      </Box>
    </Box>
  );
};
