import { Avatar, Box, Button, Image, Input, Text } from '@/components';
import LogoBgPNG from '@/assets/brand/LogoBg.png';
import Avatar1PNG from '@/assets/avatars/avatar_1.jpg';
import { IoCameraOutline } from 'react-icons/io5';
import { DatePicker } from '@/components/DatePicker';

export const SignUpScreen = () => {
  return (
    <Box className="min-h-screen bg-white px-6 py-8 flex flex-col">
      <Box
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
        }}
      >
        <Image src={LogoBgPNG} style={{ width: '100%' }} />
      </Box>
      <Box
        className="pt-20"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          flex: 1,
          width: '100%',
        }}
      >
        <Box style={{ position: 'relative' }}>
          <Avatar height={100} width={100} source={Avatar1PNG} />
          <Box
            style={{ position: 'absolute', bottom: 0, right: 0 }}
            background="white"
            borderRadius="full"
            padding="sm"
          >
            <IoCameraOutline width={24} height={24} />
          </Box>
        </Box>
        <Text
          variant="heading"
          style={{
            paddingTop: 10,
          }}
        >
          Your profile
        </Text>
        <Box
          style={{
            paddingTop: 20,
            gap: 10,
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
          }}
        >
          <Text variant="label">Name</Text>
          <Input
            placeholder="Type in your full name"
            className="h-12 bg-gray-100 border-0 rounded-lg text-base"
          />
          <Text variant="label">Birthday</Text>
          <DatePicker className="h-12 bg-gray-100 border-0 rounded-lg text-base" />
        </Box>
      </Box>
      <Button style={{ width: '100%', padding: 25 }}>Continue</Button>
    </Box>
  );
};
