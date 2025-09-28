import { useEffect } from 'react';
import { Box } from '../Box';
import { Text } from '../Text';

type BlurModalProps = {
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  onClose: () => void;
};

export const BlurModal = ({
  icon,
  title,
  description,
  onClose,
}: BlurModalProps) => {
  useEffect(() => {
    setTimeout(() => {
      onClose();
    }, 3000);
  }, []);

  return (
    <Box className="fixed inset-0 bg-white/30 backdrop-blur-md flex items-center justify-center">
      <Box className="flex flex-col items-center justify-center text-center">
        {icon && <div className="flex justify-center">{icon}</div>}
        {title && (
          <Text className="text-black font-semibold text-4xl mt-4 text-center">
            {title}
          </Text>
        )}
        {description && (
          <Text className="text-black/90 mt-2 text-center">{description}</Text>
        )}
      </Box>
    </Box>
  );
};
