import { Box, Icon, Text } from '@/components';
import { ChevronRight } from 'lucide-react';

export const OptionsList = () => {
  return (
    <Box className="flex flex-col gap-6 px-6 py-6">
      <Box className="flex flex-row gap-4">
        <Box className="w-1/2 bg-[#fafafa] rounded-lg p-6 shadow-sm border border-gray-100 flex flex-col justify-between h-[160px]">
          <Box className="flex flex-col gap-4">
            <Icon name="calendar" className="w-8 h-8" />
            <Text className="text-gray-900 font-bold text-base">
              Feedback pós-evento
            </Text>
          </Box>
          <Box className="self-end">
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </Box>
        </Box>
        <Box className="w-1/2 bg-[#fafafa] rounded-lg p-6 shadow-sm border border-gray-100 flex flex-col justify-between h-[160px]">
          <Box className="flex flex-col gap-4">
            <Icon name="finance" className="w-8 h-8" />
            <Text className="text-gray-900 font-bold text-base">
              Solicitações de reembolso
            </Text>
          </Box>
          <Box className="self-end">
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </Box>
        </Box>
      </Box>
      <Box className="flex flex-row gap-4">
        <Box className="w-1/2 bg-[#fafafa] rounded-lg p-6 shadow-sm border border-gray-100 flex flex-col justify-between h-[160px]">
          <Box className="flex flex-col gap-4">
            <Icon name="fileFolder" className="w-8 h-8" />
            <Text className="text-gray-900 font-bold text-base">
              Service Coordinators
            </Text>
          </Box>
          <Box className="self-end">
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </Box>
        </Box>
        <Box className="w-1/2 bg-[#fafafa] rounded-lg p-6 shadow-sm border border-gray-100 flex flex-col justify-between h-[160px]">
          <Box className="flex flex-col gap-4">
            <Icon name="telephone" className="w-8 h-8" />
            <Text className="text-gray-900 font-bold text-base">
              CEO call request
            </Text>
          </Box>
          <Box className="self-end">
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </Box>
        </Box>
      </Box>
      <Box className="flex flex-row gap-4">
        <Box className="w-1/2 bg-[#fafafa] rounded-lg p-6 shadow-sm border border-gray-100 flex flex-col justify-between h-[160px]">
          <Box className="flex flex-col gap-4">
            <Icon name="thumbsUp" className="w-8 h-8" />
            <Text className="text-gray-900 font-bold text-base">
              Merchan Request
            </Text>
          </Box>
          <Box className="self-end">
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </Box>
        </Box>
        <Box className="w-1/2 bg-[#fafafa] rounded-lg p-6 shadow-sm border border-gray-100 flex flex-col justify-between h-[160px]">
          <Box className="flex flex-col gap-4">
            <Icon name="fileFolder" className="w-8 h-8" />
            <Text className="text-gray-900 font-bold text-base">
              Bartender (Inventário)
            </Text>
          </Box>
          <Box className="self-end">
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
