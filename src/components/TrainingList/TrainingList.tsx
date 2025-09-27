import { Box } from '../Box';
import { Icon } from '../Icon';
import { Text } from '../Text';
import { Image } from '../Image';
import { ChevronRight, Play } from 'lucide-react';
import Training1PNG from '@/assets/trainings/training_1.png';
import Training2PNG from '@/assets/trainings/training_2.png';

export const TrainingList = () => {
  return (
    <Box>
      <Box className="flex flex-row justify-between items-center px-6 py-6">
        <Box className="flex flex-row gap-4 items-center">
          <Icon name="lilOpenBook" />
          <Text className="font-semibold">Treinamentos</Text>
        </Box>
        <Box className="flex flex-row gap-2 items-center">
          <Text className="text-gray-500">Ver tudo</Text>
          <ChevronRight className="w-4 h-4 text-gray-500" />
        </Box>
      </Box>
      <Box className="overflow-x-auto pb-6">
        <Box
          className="flex flex-row gap-4 px-6"
          style={{ width: 'max-content' }}
        >
          <Box className="w-[250px] flex-shrink-0 bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <Box className="relative">
              <Image
                src={Training1PNG}
                className="w-full h-[120px] object-cover"
              />
            </Box>
            <Box className="p-4">
              <Text className="font-semibold text-gray-900 mb-2">
                Harrison Promo Video
              </Text>
              <Box className="flex flex-row items-center gap-2">
                <Play className="w-4 h-4 text-gray-500" />
                <Text className="text-gray-500 text-sm">2 min</Text>
              </Box>
            </Box>
          </Box>
          <Box className="w-[250px] flex-shrink-0 bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <Box className="relative">
              <Image
                src={Training2PNG}
                className="w-full h-[120px] object-cover"
              />
            </Box>
            <Box className="p-4">
              <Text className="font-semibold text-gray-900 mb-2">
                Table Set Up
              </Text>
              <Box className="flex flex-row items-center gap-2">
                <Play className="w-4 h-4 text-gray-500" />
                <Text className="text-gray-500 text-sm">1 min</Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
