import { Button, Box, CombinationMark } from '@/components';

export const InitialPageScreen = () => {
  return (
    <Box
      display="flex"
      direction="col"
      align="center"
      justify="between"
      className="h-screen w-full bg-white"
    >
      {/* Logo Section - Centered */}
      <Box
        display="flex"
        direction="col"
        align="center"
        justify="center"
        className="flex-1"
      >
        <CombinationMark width={232} height={232} />
      </Box>

      {/* Buttons Section - Bottom */}
      <Box
        display="flex"
        direction="col"
        align="center"
        className="w-full max-w-sm px-8 pb-8"
      >
        <Button className="w-full bg-black text-white font-medium py-6 px-6 rounded-lg mb-4 hover:bg-gray-800 transition-colors">
          Sign in
        </Button>

        <Button className="w-full bg-gray-200 text-black font-medium py-6 px-6 rounded-lg hover:bg-gray-300 transition-colors">
          Enter with code
        </Button>
      </Box>
    </Box>
  );
};
