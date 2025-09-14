import { Logo } from '@/components/Logo/Logo';
import { Button, Input, Text } from '../../components';
import { MdChevronLeft, MdOutlineMailOutline } from 'react-icons/md';
import { LuEye } from 'react-icons/lu';

export const SignInScreen = () => {
  return (
    <div className="min-h-screen bg-white px-6 py-8 flex flex-col">
      {/* Header */}
      <div className="flex items-center  mb-12">
        <Button variant="ghost" size="icon" className="p-2">
          <MdChevronLeft size={40} />
        </Button>
        <Logo width={24} height={24} />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Title */}
        <div className="mb-12">
          <Text
            as="h1"
            size="3xl"
            weight="bold"
            className="text-black leading-tight"
          >
            Welcome to
            <br />
            <span className="text-4xl">HARRISON</span>
          </Text>
        </div>

        {/* Input Fields */}
        <div className="space-y-4 mb-8">
          {/* Email Input */}
          <div className="relative">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <MdOutlineMailOutline size={20} className="text-gray-400" />
            </div>
            <Input
              type="email"
              placeholder="Type your email"
              className="h-12 bg-gray-100 border-0 rounded-lg text-base pl-12"
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <LuEye size={20} className="text-gray-400" />
            </div>
            <Input
              type="password"
              placeholder="Type your password"
              className="h-12 bg-gray-100 border-0 rounded-lg text-base pl-12"
            />
          </div>
        </div>

        {/* Sign In Button */}
        <div className="mt-auto">
          <Button className="w-full h-12 bg-black text-white font-bold text-base rounded-lg hover:bg-black/90">
            Sign in
          </Button>
        </div>
      </div>
    </div>
  );
};
