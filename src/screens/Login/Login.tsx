import { Button, Input, Box, Icon } from '@/components';

export const Login = () => {
  return (
    <Box
      display="flex"
      direction="col"
      align="center"
      justify="center"
      className="h-screen w-full"
      padding="lg"
      background="muted"
    >
      <Box
        background="white"
        padding="xl"
        borderRadius="lg"
        shadow="lg"
        className="w-full max-w-md"
      >
        <h1 className="text-2xl font-bold text-center mb-6">Login</h1>

        <Box display="flex" direction="col" className="space-y-4">
          <Input placeholder="Email" />
          <Input placeholder="Password" type="password" />

          <Box display="flex" justify="center" margin="md">
            <Button className="w-full">Login</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
