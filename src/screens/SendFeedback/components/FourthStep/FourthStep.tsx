import { useState } from 'react';
import { Box, Text, Button } from '@/components';
import { ChevronLeftIcon } from 'lucide-react';

export const FourthStep = () => {
  const [hygieneAnswer, setHygieneAnswer] = useState<'yes' | 'no' | null>(null);
  const [hygieneExplanation, setHygieneExplanation] = useState('');
  const [uniformAnswer, setUniformAnswer] = useState<'yes' | 'no' | null>(null);
  const [uniformExplanation, setUniformExplanation] = useState('');
  const [plateCarryingAnswer, setPlateCarryingAnswer] = useState<
    'yes' | 'no' | null
  >(null);
  const [plateCarryingRating, setPlateCarryingRating] = useState<
    'excellent' | 'good' | 'average' | 'poor' | null
  >(null);
  const [additionalInfo, setAdditionalInfo] = useState('');

  const handleHygieneChange = (answer: 'yes' | 'no') => {
    setHygieneAnswer(answer);
    if (answer === 'no') {
      setHygieneExplanation('');
    }
  };

  const handleUniformChange = (answer: 'yes' | 'no') => {
    setUniformAnswer(answer);
    if (answer === 'no') {
      setUniformExplanation('');
    }
  };

  const handlePlateCarryingChange = (answer: 'yes' | 'no') => {
    setPlateCarryingAnswer(answer);
  };

  const handlePlateCarryingRatingChange = (
    rating: 'excellent' | 'good' | 'average' | 'poor'
  ) => {
    setPlateCarryingRating(rating);
  };

  const handleNext = () => {
    // Handle next step logic
    console.log('Fourth step data', {
      hygieneAnswer,
      hygieneExplanation,
      uniformAnswer,
      uniformExplanation,
      plateCarryingAnswer,
      plateCarryingRating,
      additionalInfo,
    });
  };

  return (
    <Box className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <Box className="px-6 py-6 pt-12">
        <ChevronLeftIcon className="w-6 h-6 text-black" />
      </Box>

      {/* Title */}
      <Box className="px-6 py-4">
        <Text className="text-xl font-bold text-black">
          Teamwork Evaluation
        </Text>
      </Box>

      {/* Main Content */}
      <Box className="flex-1 px-6 py-4">
        {/* Question 1: Hygiene Standards */}
        <Box className="mb-8">
          <Text className="text-lg font-bold text-black mb-3">
            Were there any staff members who did not meet hygiene standards?
          </Text>
          <Text className="text-sm text-gray-500 mb-4">
            If Yes, please describe
          </Text>

          <Box className="space-y-4 mb-4">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="hygiene"
                value="yes"
                checked={hygieneAnswer === 'yes'}
                onChange={() => handleHygieneChange('yes')}
                className="w-5 h-5 text-black border-gray-300 focus:ring-black"
              />
              <Text className="text-base text-black">Yes</Text>
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="hygiene"
                value="no"
                checked={hygieneAnswer === 'no'}
                onChange={() => handleHygieneChange('no')}
                className="w-5 h-5 text-black border-gray-300 focus:ring-black"
              />
              <Text className="text-base text-black">No</Text>
            </label>
          </Box>

          {/* Conditional text field for hygiene question */}
          {hygieneAnswer === 'yes' && (
            <textarea
              value={hygieneExplanation}
              onChange={e => setHygieneExplanation(e.target.value)}
              placeholder="Please describe the hygiene issues..."
              className="w-full h-32 p-4 border-0 rounded-lg bg-gray-100 text-gray-500 resize-none focus:outline-none focus:ring-2 focus:ring-black focus:bg-white"
            />
          )}
        </Box>

        {/* Question 2: Uniform Standards */}
        <Box className="mb-8">
          <Text className="text-lg font-bold text-black mb-3">
            Did all staff members meet Harrison's uniform standards?
          </Text>
          <Text className="text-sm text-gray-500 mb-4">
            If No, please describe
          </Text>

          <Box className="space-y-4 mb-4">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="uniform"
                value="yes"
                checked={uniformAnswer === 'yes'}
                onChange={() => handleUniformChange('yes')}
                className="w-5 h-5 text-black border-gray-300 focus:ring-black"
              />
              <Text className="text-base text-black">Yes</Text>
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="uniform"
                value="no"
                checked={uniformAnswer === 'no'}
                onChange={() => handleUniformChange('no')}
                className="w-5 h-5 text-black border-gray-300 focus:ring-black"
              />
              <Text className="text-base text-black">No</Text>
            </label>
          </Box>

          {/* Conditional text field for uniform question */}
          {uniformAnswer === 'no' && (
            <textarea
              value={uniformExplanation}
              onChange={e => setUniformExplanation(e.target.value)}
              placeholder="Please describe the uniform issues..."
              className="w-full h-32 p-4 border-0 rounded-lg bg-gray-100 text-gray-500 resize-none focus:outline-none focus:ring-2 focus:ring-black focus:bg-white"
            />
          )}
        </Box>

        {/* Question 3: Plate Carrying Ability (Yes/No) */}
        <Box className="mb-8">
          <Text className="text-lg font-bold text-black mb-3">
            Were there any staff unable to carry (03) three plates?
          </Text>
          <Text className="text-sm text-gray-500 mb-4">(If applicable)</Text>

          <Box className="space-y-4 mb-4">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="plateCarrying"
                value="yes"
                checked={plateCarryingAnswer === 'yes'}
                onChange={() => handlePlateCarryingChange('yes')}
                className="w-5 h-5 text-black border-gray-300 focus:ring-black"
              />
              <Text className="text-base text-black">Yes</Text>
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="plateCarrying"
                value="no"
                checked={plateCarryingAnswer === 'no'}
                onChange={() => handlePlateCarryingChange('no')}
                className="w-5 h-5 text-black border-gray-300 focus:ring-black"
              />
              <Text className="text-base text-black">No</Text>
            </label>
          </Box>
        </Box>

        {/* Question 4: Plate Carrying Ability (Rating) */}
        <Box className="mb-8">
          <Text className="text-lg font-bold text-black mb-3">
            Were there any staff unable to carry (03) three plates?
          </Text>

          <Box className="space-y-4 mb-4">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="plateCarryingRating"
                value="excellent"
                checked={plateCarryingRating === 'excellent'}
                onChange={() => handlePlateCarryingRatingChange('excellent')}
                className="w-5 h-5 text-black border-gray-300 focus:ring-black"
              />
              <Text className="text-base text-black">Excellent</Text>
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="plateCarryingRating"
                value="good"
                checked={plateCarryingRating === 'good'}
                onChange={() => handlePlateCarryingRatingChange('good')}
                className="w-5 h-5 text-black border-gray-300 focus:ring-black"
              />
              <Text className="text-base text-black">Good</Text>
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="plateCarryingRating"
                value="average"
                checked={plateCarryingRating === 'average'}
                onChange={() => handlePlateCarryingRatingChange('average')}
                className="w-5 h-5 text-black border-gray-300 focus:ring-black"
              />
              <Text className="text-base text-black">Average</Text>
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="plateCarryingRating"
                value="poor"
                checked={plateCarryingRating === 'poor'}
                onChange={() => handlePlateCarryingRatingChange('poor')}
                className="w-5 h-5 text-black border-gray-300 focus:ring-black"
              />
              <Text className="text-base text-black">Poor</Text>
            </label>
          </Box>
        </Box>

        {/* Additional Information */}
        <Box className="mb-8">
          <Text className="text-sm text-gray-500 mb-4">
            Additional Information
          </Text>
          <textarea
            value={additionalInfo}
            onChange={e => setAdditionalInfo(e.target.value)}
            placeholder=""
            className="w-full h-32 p-4 border-0 rounded-lg bg-gray-100 text-gray-500 resize-none focus:outline-none focus:ring-2 focus:ring-black focus:bg-white"
          />
        </Box>
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
