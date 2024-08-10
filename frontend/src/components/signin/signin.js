import {
  Input,
    FormControl,
    FormLabel,
    FormHelperText,
  } from '@chakra-ui/react'
export const SignIn=()=>{
    return(
        <>
        <FormControl>
  <FormLabel>Email address</FormLabel>
  <Input type='email' />
  <FormHelperText>We'll never share your email.</FormHelperText>
</FormControl>

<FormControl>
  <FormLabel>Password</FormLabel>
  <Input type='password' />
  <FormHelperText>We'll never share your password.</FormHelperText>
</FormControl>

        </>
    )
}