import { Box, Text, Avatar, Button } from '@/components';
import avatarImage from '@/assets/avatars/avatar_1.jpg';

type FeedbackItemProps = {
  eventTitle: string;
  date: string;
  onOpen: () => void;
};

export const FeedbackItem = ({
  eventTitle,
  date,
  onOpen,
}: FeedbackItemProps) => {
  return (
    <Box className="flex items-center py-4 px-0">
      <Avatar height={40} width={40} source={avatarImage} />
      <Box className="flex-1 ml-3">
        <Text className="font-semibold text-base text-black mb-1">
          {eventTitle}
        </Text>
        <Text className="text-sm text-gray-500">Eu • {date}</Text>
      </Box>
      <Button
        variant="ghost"
        size="sm"
        onClick={onOpen}
        className="text-gray-500 hover:text-gray-700 p-0 h-auto"
      >
        <Text className="text-sm text-gray-500 mr-1">Abrir</Text>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </Button>
    </Box>
  );
};
