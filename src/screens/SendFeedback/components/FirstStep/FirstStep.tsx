import { Box, Button, Input, Text } from '@/components';
import { ChevronLeft, PencilIcon } from 'lucide-react';

export const FirstStep = () => {
  return (
    <Box className="h-screen w-full bg-white flex flex-col">
      {/* Header with back button */}
      <Box className="px-6 py-8">
        <ChevronLeft className="w-6 h-6 text-black cursor-pointer" />
      </Box>

      {/* Event name section */}
      <Box className="flex items-center gap-2 w-full py-8 px-6 border-b border-gray-100">
        <Input
          placeholder="Event Name"
          className="border-none text-2xl shadow-none focus-visible:ring-0 font-bold placeholder-opacity-30 text-gray-600 flex-1"
        />
        <PencilIcon className="w-6 h-6 text-black cursor-pointer" />
      </Box>

      {/* Form content */}
      <Box className="flex-1 px-6 py-8 flex flex-col gap-8 w-full">
        {/* Date field */}
        <Box className="flex flex-row gap-3 w-full justify-between border-b border-gray-100 pb-8">
          <Text className="text-black font-medium text-base">Data</Text>
          <Button
            variant="secondary"
            className="justify-start bg-gray-200 text-gray-700 hover:bg-gray-300 h-12 text-left font-normal"
          >
            Escolher data
          </Button>
        </Box>

        {/* Location field */}
        <Box className="flex flex-col gap-3 w-full border-b border-gray-100 pb-8">
          <Text className="text-black font-medium text-base">Local</Text>
          <Input
            placeholder="Local do evento"
            className="h-12 bg-gray-100 border-none focus-visible:ring-0 placeholder:text-gray-500"
          />
        </Box>
      </Box>

      {/* Next button */}
      <Box className="px-6 pb-8 w-full">
        <Button className="w-full h-12 bg-gray-600 hover:bg-gray-700 text-white font-medium text-base">
          Next
        </Button>
      </Box>
    </Box>
  );
};
