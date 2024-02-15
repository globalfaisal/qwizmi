'use client'

import { User } from '@prisma/client'
import { signOut } from 'next-auth/react'
import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import UserAvatar from '@/components/UserAvatar'

type Props = {
  user: Pick<User, 'name' | 'email' | 'image'>
}

const UserAccountNav = ({ user }: Props) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserAvatar user={user} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Hello, {user.name?.split(' ')[0]}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem disabled>You're signed-in with:</DropdownMenuItem>
        <DropdownMenuItem disabled>{user.email}</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={(e) => {
            e.preventDefault()
            signOut().catch((error) => {
              console.error('Failed to sign out ', error)
            })
          }}
        >
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserAccountNav
