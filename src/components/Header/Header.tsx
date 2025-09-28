import { Avatar, Box, Icon, Text } from '@/components';
import { Logo } from '@/components/Logo/Logo';
import Avatar1PNG from '@/assets/avatars/avatar_1.jpg';
import { ChevronLeftIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export const Header = ({
  hasLogo = true,
  hasAvatar = true,
  hasGoBackButton = false,
  title = '',
  subtitle = '',
  hasShadow = false,
}: {
  hasLogo?: boolean;
  hasAvatar?: boolean;
  hasGoBackButton?: boolean;
  title?: string;
  subtitle?: string;
  hasShadow?: boolean;
}) => {
  return (
    <Box
      className={cn(
        'w-full bg-white px-6 py-8 flex flex-col items-center justify-center',
        hasShadow && 'shadow-sm'
      )}
    >
      {hasLogo && <Logo width={32} height={32} />}
      <Box className="flex items-center justify-between w-full">
        {hasAvatar && <Avatar height={52} width={52} source={Avatar1PNG} />}
        {hasGoBackButton && (
          <Box className="flex items-center justify-center gap-2">
            <ChevronLeftIcon />
            <Logo width={32} height={32} />
          </Box>
        )}
        <Box className="flex items-center gap-4">
          <Icon name="notificationBox" />
          <Icon name="search" />
        </Box>
      </Box>
      {title.length > 0 && subtitle.length > 0 && (
        <Box className="w-full pt-6">
          <Text className="text-3xl font-bold text-black mb-2 text-left">
            {title}
          </Text>
          <Text className="text-gray-500 text-base text-left">{subtitle}</Text>
        </Box>
      )}
    </Box>
  );
};
