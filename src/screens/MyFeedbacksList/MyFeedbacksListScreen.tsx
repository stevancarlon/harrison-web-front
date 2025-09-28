import { Box, Header, FeedbackItem, SentSection, Button } from '@/components';

// Mock data for feedback items
const feedbackData = [
  {
    id: 1,
    eventTitle: 'Conferencia de Tecnología',
    date: '15, julio',
  },
  {
    id: 2,
    eventTitle: 'Taller de Marketing Digital',
    date: '22, agosto',
  },
  {
    id: 3,
    eventTitle: 'Lanzamiento de Nuevo Producto',
    date: '5, septiembre',
  },
  {
    id: 4,
    eventTitle: 'Reunión Trimestral del Equipo',
    date: '18, octubre',
  },
  {
    id: 5,
    eventTitle: 'Seminario Web de Finanzas Pe...',
    date: '3, noviembre',
  },
  {
    id: 6,
    eventTitle: 'Celebración de Fin de Año',
    date: '12, diciembre',
  },
];

export const MyFeedbacksListScreen = () => {
  const handleOpenFeedback = (id: number) => {
    console.log('Opening feedback:', id);
    // TODO: Navigate to feedback details
  };

  const handleNewFeedback = () => {
    console.log('Creating new feedback');
    // TODO: Navigate to new feedback form
  };

  return (
    <Box className="h-full flex flex-col">
      <Header
        hasLogo={false}
        hasAvatar={false}
        hasGoBackButton={true}
        title="Meus Feedbacks"
        subtitle="Envios de relatório pós-evento."
        hasShadow={true}
      />

      <Box className="flex-1 px-6 py-6 overflow-hidden">
        <SentSection count={7}>
          <Box className="py-2">
            {feedbackData.map(feedback => (
              <FeedbackItem
                key={feedback.id}
                eventTitle={feedback.eventTitle}
                date={feedback.date}
                onOpen={() => handleOpenFeedback(feedback.id)}
              />
            ))}
          </Box>
        </SentSection>
      </Box>

      <Box className="px-6 pb-6 flex justify-center w-full">
        <Button
          onClick={handleNewFeedback}
          className="w-full max-w-sm h-12 bg-black text-white rounded-lg font-medium text-base hover:bg-gray-800"
        >
          Novo Feedback Pós Evento
        </Button>
      </Box>
    </Box>
  );
};
