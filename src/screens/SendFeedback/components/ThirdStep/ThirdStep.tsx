import { useState } from 'react';
import { Box, Text, Button } from '@/components';
import { ChevronLeftIcon, PlusIcon } from 'lucide-react';

export const ThirdStep = () => {
  const [question1Answer, setQuestion1Answer] = useState<'yes' | 'no' | null>(
    null
  );
  const [question1Explanation, setQuestion1Explanation] = useState('');
  const [question2Answer, setQuestion2Answer] = useState<'yes' | 'no' | null>(
    null
  );
  const [question2Explanation, setQuestion2Explanation] = useState('');
  const [improvements, setImprovements] = useState('');
  const [additionalComments, setAdditionalComments] = useState('');
  const [photos, setPhotos] = useState<File[]>([]);

  const handleQuestion1Change = (answer: 'yes' | 'no') => {
    setQuestion1Answer(answer);
    if (answer === 'yes') {
      setQuestion1Explanation('');
    }
  };

  const handleQuestion2Change = (answer: 'yes' | 'no') => {
    setQuestion2Answer(answer);
    if (answer === 'no') {
      setQuestion2Explanation('');
    }
  };

  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    setPhotos(prev => [...prev, ...files]);
  };

  const handleNext = () => {
    // Handle next step logic
    console.log('Third step data', {
      question1Answer,
      question1Explanation,
      question2Answer,
      question2Explanation,
      improvements,
      additionalComments,
      photos,
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
        <Text className="text-xl font-bold text-black">Staff Performance</Text>
      </Box>

      {/* Main Content */}
      <Box className="flex-1 px-6 py-4">
        {/* Question 1 */}
        <Box className="mb-8">
          <Text className="text-lg font-bold text-black mb-3">
            Did the staff fulfill all assigned duties effectively?
          </Text>
          <Text className="text-sm text-gray-500 mb-4">
            If No, please describe
          </Text>

          <Box className="space-y-4 mb-4">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="question1"
                value="yes"
                checked={question1Answer === 'yes'}
                onChange={() => handleQuestion1Change('yes')}
                className="w-5 h-5 text-black border-gray-300 focus:ring-black"
              />
              <Text className="text-base text-black">Yes</Text>
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="question1"
                value="no"
                checked={question1Answer === 'no'}
                onChange={() => handleQuestion1Change('no')}
                className="w-5 h-5 text-black border-gray-300 focus:ring-black"
              />
              <Text className="text-base text-black">No</Text>
            </label>
          </Box>

          {/* Conditional text field for Question 1 */}
          {question1Answer === 'no' && (
            <textarea
              value={question1Explanation}
              onChange={e => setQuestion1Explanation(e.target.value)}
              placeholder="Please describe the issues..."
              className="w-full h-32 p-4 border-0 rounded-lg bg-gray-100 text-gray-500 resize-none focus:outline-none focus:ring-2 focus:ring-black focus:bg-white"
            />
          )}
        </Box>

        {/* Question 2 */}
        <Box className="mb-8">
          <Text className="text-lg font-bold text-black mb-3">
            Were there any unexpected challenges that affected staff
            performance, or caused necessary adjustment to staffing (end times,
            etc)?
          </Text>
          <Text className="text-sm text-gray-500 mb-4">
            If Yes, What were they? Please describe
          </Text>

          <Box className="space-y-4 mb-4">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="question2"
                value="yes"
                checked={question2Answer === 'yes'}
                onChange={() => handleQuestion2Change('yes')}
                className="w-5 h-5 text-black border-gray-300 focus:ring-black"
              />
              <Text className="text-base text-black">Yes</Text>
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="question2"
                value="no"
                checked={question2Answer === 'no'}
                onChange={() => handleQuestion2Change('no')}
                className="w-5 h-5 text-black border-gray-300 focus:ring-black"
              />
              <Text className="text-base text-black">No</Text>
            </label>
          </Box>

          {/* Conditional text field for Question 2 */}
          {question2Answer === 'yes' && (
            <textarea
              value={question2Explanation}
              onChange={e => setQuestion2Explanation(e.target.value)}
              placeholder="Please describe the challenges..."
              className="w-full h-32 p-4 border-0 rounded-lg bg-gray-100 text-gray-500 resize-none focus:outline-none focus:ring-2 focus:ring-black focus:bg-white"
            />
          )}
        </Box>

        {/* Improvements Question */}
        <Box className="mb-8">
          <Text className="text-lg font-bold text-black mb-4">
            What improvements would you suggest for future staffing at similar
            events?
          </Text>
          <textarea
            value={improvements}
            onChange={e => setImprovements(e.target.value)}
            placeholder=""
            className="w-full h-32 p-4 border-0 rounded-lg bg-gray-100 text-gray-500 resize-none focus:outline-none focus:ring-2 focus:ring-black focus:bg-white"
          />
        </Box>

        {/* Additional Comments */}
        <Box className="mb-8">
          <Text className="text-lg font-bold text-black mb-4">
            Additional comments
          </Text>
          <textarea
            value={additionalComments}
            onChange={e => setAdditionalComments(e.target.value)}
            placeholder=""
            className="w-full h-32 p-4 border-0 rounded-lg bg-gray-100 text-gray-500 resize-none focus:outline-none focus:ring-2 focus:ring-black focus:bg-white"
          />
        </Box>

        {/* Photo Documentation Section */}
        <Box className="mb-8">
          <Box className="flex items-center justify-between mb-4">
            <Text className="text-lg font-bold text-black">
              Photo documentation (optional)
            </Text>
            <label className="cursor-pointer">
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handlePhotoUpload}
                className="hidden"
              />
              <Box className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <PlusIcon className="w-4 h-4 text-white" />
              </Box>
            </label>
          </Box>

          <Text className="text-sm text-gray-500 mb-4">
            Please attach any photos that help document or clarify the issues
            you've described above. Examples may include: missing rental items,
            broken equipment, damaged materials, or any other relevant problems
            you'd like to report.
          </Text>

          {/* Display uploaded photos */}
          {photos.length > 0 && (
            <Box className="grid grid-cols-2 gap-2 mt-4">
              {photos.map((photo, index) => (
                <Box key={index} className="relative">
                  <img
                    src={URL.createObjectURL(photo)}
                    alt={`Upload ${index + 1}`}
                    className="w-full h-24 object-cover rounded-lg"
                  />
                  <button
                    onClick={() =>
                      setPhotos(prev => prev.filter((_, i) => i !== index))
                    }
                    className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs"
                  >
                    ×
                  </button>
                </Box>
              ))}
            </Box>
          )}
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
