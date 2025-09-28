import React, { useState } from 'react';
import { Box, Text } from '@/components';

type SentSectionProps = {
  count: number;
  children: React.ReactNode;
};

export const SentSection = ({ count, children }: SentSectionProps) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <Box className="w-full">
      <Box className="flex items-center justify-between py-4">
        <Box className="flex items-center">
          <Text className="font-semibold text-base text-black mr-3">
            Enviado
          </Text>
          <Box className="bg-green-100 border border-green-200 rounded-full px-2 py-1">
            <Text className="text-black text-sm font-medium">{count}</Text>
          </Box>
        </Box>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center text-gray-500 hover:text-gray-700"
        >
          <Text className="text-sm text-gray-500 mr-1">
            {isExpanded ? 'ocultar' : 'mostrar'}
          </Text>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`transition-transform ${isExpanded ? 'rotate-180' : ''}`}
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>
      </Box>
      {isExpanded && <Box>{children}</Box>}
    </Box>
  );
};
