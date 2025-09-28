import { useState } from 'react';
import { Box, Text, Button } from '@/components';
import { ChevronLeftIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export const SecondStep = () => {
  const [selectedOption, setSelectedOption] = useState<'yes' | 'no' | null>(
    null
  );
  const [explanation, setExplanation] = useState('');
  const [toggleEnabled, setToggleEnabled] = useState(false);

  const handleOptionChange = (option: 'yes' | 'no') => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    // Handle next step logic
    console.log('Next step', { selectedOption, explanation, toggleEnabled });
  };

  return (
    <Box className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <Box className="px-6 py-6 pt-12">
        <ChevronLeftIcon className="w-6 h-6 text-black" />
      </Box>
      <Box className="w-full px-6 py-4 flex items-center justify-between border-b border-gray-200">
        <Box className="flex items-center gap-3">
          <Text className="text-lg font-bold text-black">Event at HotelX</Text>
        </Box>
        <Box className="flex items-center">
          {/* Toggle Switch */}
          <button
            onClick={() => setToggleEnabled(!toggleEnabled)}
            className={cn(
              'relative inline-flex h-6 w-11 items-center rounded-full transition-colors',
              toggleEnabled ? 'bg-black' : 'bg-gray-300'
            )}
          >
            <span
              className={cn(
                'inline-block h-4 w-4 transform rounded-full bg-white transition-transform',
                toggleEnabled ? 'translate-x-6' : 'translate-x-1'
              )}
            />
          </button>
        </Box>
      </Box>

      {/* Main Content */}
      <Box className="flex-1 px-6 py-6">
        {/* Question Section */}
        <Box className="mb-8">
          <Text className="text-lg font-bold text-black mb-6">
            Was there a pre-shift meeting conducted between you and the Event
            Manager?
          </Text>

          {/* Radio Options */}
          <Box className="space-y-4">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="preShiftMeeting"
                value="yes"
                checked={selectedOption === 'yes'}
                onChange={() => handleOptionChange('yes')}
                className="w-5 h-5 text-black border-gray-300 focus:ring-black"
              />
              <Text className="text-base text-black">Yes</Text>
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="preShiftMeeting"
                value="no"
                checked={selectedOption === 'no'}
                onChange={() => handleOptionChange('no')}
                className="w-5 h-5 text-black border-gray-300 focus:ring-black"
              />
              <Text className="text-base text-black">No</Text>
            </label>
          </Box>
        </Box>

        {/* Conditional Explanation Section */}
        {selectedOption === 'no' && (
          <Box className="mb-8">
            <Text className="text-lg font-bold text-black mb-3">
              Please briefly explain why a pre-shift did not occur.
            </Text>
            <Text className="text-sm text-gray-500 mb-4">
              Our goal is to understand if an operation/administrative change is
              needed, to help these meetings be achieved
            </Text>
            <textarea
              value={explanation}
              onChange={e => setExplanation(e.target.value)}
              placeholder=""
              className="w-full h-40 p-4 border-0 rounded-lg bg-gray-100 text-gray-500 resize-none focus:outline-none focus:ring-2 focus:ring-black focus:bg-white"
            />
          </Box>
        )}
      </Box>

      {/* Footer Button */}
      <Box className="px-6 py-6 w-full">
        <Button
          onClick={handleNext}
          className="w-full bg-black text-white font-bold py-4 rounded-lg hover:bg-gray-800 transition-colors h-12"
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};
