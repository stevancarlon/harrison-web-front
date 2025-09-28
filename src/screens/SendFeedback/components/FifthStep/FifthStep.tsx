import { BlurModal, Box, Button, Icon, Text } from '@/components';
import { cn } from '@/lib/utils';
import { ChevronLeftIcon } from 'lucide-react';
import { useState } from 'react';

export const FifthStep = () => {
  const [question1, setQuestion1] = useState<'yes' | 'no' | null>(null);
  const [question2, setQuestion2] = useState<'yes' | 'no' | null>(null);
  const [question3, setQuestion3] = useState<'yes' | 'no' | null>(null);
  const [question1Explanation, setQuestion1Explanation] = useState('');
  const [question2Explanation, setQuestion2Explanation] = useState('');
  const [question3Explanation, setQuestion3Explanation] = useState('');
  const [additionalComments, setAdditionalComments] = useState('');
  const [toggleEnabled, setToggleEnabled] = useState(false);

  const handleOptionChange = (questionNumber: number, option: 'yes' | 'no') => {
    switch (questionNumber) {
      case 1:
        setQuestion1(option);
        break;
      case 2:
        setQuestion2(option);
        break;
      case 3:
        setQuestion3(option);
        break;
    }
  };

  const handleSubmit = () => {
    console.log('Submit feedback', {
      question1,
      question2,
      question3,
      question1Explanation,
      question2Explanation,
      question3Explanation,
      additionalComments,
      toggleEnabled,
    });
  };

  return (
    <Box className="min-h-screen bg-white flex flex-col relative">
      {false && (
        <BlurModal
          icon={<Icon name="thumbsUp" className="w-30 h-30" />}
          title="Enviado!"
          onClose={() => {}}
        />
      )}
      {/* Header */}
      <Box className="px-6 py-6 pt-12">
        <ChevronLeftIcon className="w-6 h-6 text-black" />
      </Box>
      <Box className="w-full px-6 py-4 flex items-center justify-between border-b border-gray-200">
        <Box className="flex items-center gap-3">
          <Text className="text-lg font-bold text-black">
            Bartender Evaluation
          </Text>
        </Box>
      </Box>

      {/* Main Content */}
      <Box className="flex-1 px-6 py-6">
        {/* Question 1 */}
        <Box className="mb-8">
          <Text className="text-lg font-bold text-black mb-6">
            Did the bartender help pouring wine (if applicable) when the bar was
            slow?
          </Text>

          {/* Radio Options */}
          <Box className="space-y-4">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="question1"
                value="yes"
                checked={question1 === 'yes'}
                onChange={() => handleOptionChange(1, 'yes')}
                className="w-5 h-5 text-black border-gray-300 focus:ring-black"
              />
              <Text className="text-base text-black">Yes</Text>
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="question1"
                value="no"
                checked={question1 === 'no'}
                onChange={() => handleOptionChange(1, 'no')}
                className="w-5 h-5 text-black border-gray-300 focus:ring-black"
              />
              <Text className="text-base text-black">No</Text>
            </label>
          </Box>

          {/* Conditional Explanation Section for Question 1 */}
          {question1 === 'no' && (
            <Box className="mt-4">
              <Text className="text-sm text-gray-500 mb-4">
                If No, please describe
              </Text>
              <textarea
                value={question1Explanation}
                onChange={e => setQuestion1Explanation(e.target.value)}
                placeholder=""
                className="w-full h-32 p-4 border-0 rounded-lg bg-gray-100 text-gray-500 resize-none focus:outline-none focus:ring-2 focus:ring-black focus:bg-white"
              />
            </Box>
          )}
        </Box>

        {/* Question 2 */}
        <Box className="mb-8">
          <Text className="text-lg font-bold text-black mb-6">
            After setting up the bar (if applicable), did the bartender help
            with setting up the rest of the event?
          </Text>

          {/* Radio Options */}
          <Box className="space-y-4">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="question2"
                value="yes"
                checked={question2 === 'yes'}
                onChange={() => handleOptionChange(2, 'yes')}
                className="w-5 h-5 text-black border-gray-300 focus:ring-black"
              />
              <Text className="text-base text-black">Yes</Text>
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="question2"
                value="no"
                checked={question2 === 'no'}
                onChange={() => handleOptionChange(2, 'no')}
                className="w-5 h-5 text-black border-gray-300 focus:ring-black"
              />
              <Text className="text-base text-black">No</Text>
            </label>
          </Box>

          {/* Conditional Explanation Section for Question 2 */}
          {question2 === 'no' && (
            <Box className="mt-4">
              <Text className="text-sm text-gray-500 mb-4">
                If No, please describe
              </Text>
              <textarea
                value={question2Explanation}
                onChange={e => setQuestion2Explanation(e.target.value)}
                placeholder=""
                className="w-full h-32 p-4 border-0 rounded-lg bg-gray-100 text-gray-500 resize-none focus:outline-none focus:ring-2 focus:ring-black focus:bg-white"
              />
            </Box>
          )}
        </Box>

        {/* Question 3 */}
        <Box className="mb-8">
          <Text className="text-lg font-bold text-black mb-6">
            After tearing down the bar (if applicable), did the bartender help
            you with the teardown, or did they leave right after?
          </Text>

          {/* Radio Options */}
          <Box className="space-y-4">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="question3"
                value="yes"
                checked={question3 === 'yes'}
                onChange={() => handleOptionChange(3, 'yes')}
                className="w-5 h-5 text-black border-gray-300 focus:ring-black"
              />
              <Text className="text-base text-black">Yes</Text>
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="question3"
                value="no"
                checked={question3 === 'no'}
                onChange={() => handleOptionChange(3, 'no')}
                className="w-5 h-5 text-black border-gray-300 focus:ring-black"
              />
              <Text className="text-base text-black">No</Text>
            </label>
          </Box>

          {/* Conditional Explanation Section for Question 3 */}
          {question3 === 'no' && (
            <Box className="mt-4">
              <Text className="text-sm text-gray-500 mb-4">
                If No, please describe
              </Text>
              <textarea
                value={question3Explanation}
                onChange={e => setQuestion3Explanation(e.target.value)}
                placeholder=""
                className="w-full h-32 p-4 border-0 rounded-lg bg-gray-100 text-gray-500 resize-none focus:outline-none focus:ring-2 focus:ring-black focus:bg-white"
              />
            </Box>
          )}
        </Box>

        {/* Additional Comments Section */}
        <Box className="mb-8">
          <Text className="text-lg font-bold text-black mb-4">
            Additional comments
          </Text>
          <textarea
            value={additionalComments}
            onChange={e => setAdditionalComments(e.target.value)}
            placeholder=""
            className="w-full h-40 p-4 border-0 rounded-lg bg-gray-100 text-gray-500 resize-none focus:outline-none focus:ring-2 focus:ring-black focus:bg-white"
          />
        </Box>
      </Box>

      {/* Footer Button */}
      <Box className="px-6 py-6 w-full">
        <Button
          onClick={handleSubmit}
          className="w-full bg-black text-white font-bold py-4 rounded-lg hover:bg-gray-800 transition-colors h-12"
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};
