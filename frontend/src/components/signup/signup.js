import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import {
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
  Box,
  Stack,
  Button,
} from '@chakra-ui/react';

export const SignUp = () => {
    const nav=useNavigate();

    const ForgotPassword=()=>{
        nav('/forgotpassword')

    }
  return (
    <Box maxW="md" mx="auto" p={4} borderWidth={1} borderRadius="lg" boxShadow="md">
      <Stack spacing={4}>
        <FormControl id="name">
          <FormLabel>Name</FormLabel>
          <Input type="text" placeholder="Enter your name" />
        </FormControl>

        <FormControl id="email">
          <FormLabel>Email address</FormLabel>
          <Input type="email" placeholder="Enter your email" />
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>

        <FormControl id="password">
          <FormLabel>Password</FormLabel>
          <Input type="password" placeholder="Enter your password" />
          <FormHelperText>We'll never share your password.</FormHelperText>
        </FormControl>

        <FormControl id="mobile">
          <FormLabel>Mobile Number</FormLabel>
          <Input type="tel" placeholder="Enter your mobile number" />
        </FormControl>

        <Button colorScheme="blue" type="submit">
          Sign In
        </Button>
        <h2 onClick={ForgotPassword}>Forgot password</h2>
      </Stack>
    </Box>
  );
};
