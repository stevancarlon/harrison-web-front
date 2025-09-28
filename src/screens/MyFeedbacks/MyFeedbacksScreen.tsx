import { Box, Header, Text, Icon, Button } from '@/components';

export const MyFeedbacksScreen = () => {
  return (
    <Box className="h-screen w-full bg-white flex flex-col">
      {/* Header with back arrow, logo, and action icons */}
      <Header hasAvatar={false} hasGoBackButton={true} hasLogo={false} />

      {/* Main content - centered */}
      <Box className="flex-1 flex flex-col items-center justify-center px-6 w-full">
        {/* 3D Calendar Icon */}
        <Box className="mb-8">
          <Icon name="calendar" className="w-24 h-24 text-gray-600" />
        </Box>

        {/* Main Title */}
        <Text className="text-3xl font-bold text-black text-center mb-4 w-[150px]">
          Envie um feedback
        </Text>

        {/* Subtitle */}
        <Text className="text-gray-500 text-base text-center mb-12 w-[250px]">
          Envio um relatório sobre seu seu último evento.
        </Text>
      </Box>

      {/* Bottom Button */}
      <Box className="px-6 pb-8 w-full">
        <Button className="w-full bg-black text-white font-medium py-6 px-6 rounded-lg hover:bg-gray-800 transition-colors">
          Enviar Feedback Pós Evento
        </Button>
      </Box>
    </Box>
  );
};
