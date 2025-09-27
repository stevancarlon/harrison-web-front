import { Box } from '@/components';
import { Header } from '@/components/Header/Header';
import { OptionsList } from './components/OptionsList/OptionsList';
import { TrainingList } from '@/components/TrainingList';
import { Lettermark } from '@/components/Lettermark';

export const HomeScreen = () => {
  return (
    <Box className="min-h-screen bg-white">
      <Header />
      <OptionsList />
      <TrainingList />
      <Box className="flex justify-center items-center px-6 pb-1">
        <Lettermark width="100%" />
      </Box>
    </Box>
  );
};
