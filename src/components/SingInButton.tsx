'use client'

import { signIn } from 'next-auth/react'
import { Button } from '@/components/ui/button'

type Props = {
  text: string
}

const SignInButton = ({ text }: Props) => {
  return (
    <Button
      variant="outline"
      onClick={(e) => {
        e.preventDefault()
        signIn('google').catch((error) => {
          console.error('Failed to sign in ', error)
        })
      }}
    >
      {text}
    </Button>
  )
}

export default SignInButton
