import { type AvatarProps } from '@radix-ui/react-avatar'
import { type User } from 'next-auth'
import React from 'react'
import NextImage from '@/components/NextImage'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

interface Props extends AvatarProps {
  user: Pick<User, 'name' | 'image'>
}

const UserAvatar = ({ user, ...props }: Props) => {
  return (
    <Avatar {...props}>
      {user.image ? (
        <div className="relative aspect-square h-full w-full">
          <NextImage
            fill
            src={user.image}
            alt="profile picture"
            referrerPolicy="no-referrer"
          />
        </div>
      ) : (
        <AvatarFallback>
          <span className="sr-only ">{user?.name}</span>
        </AvatarFallback>
      )}
    </Avatar>
  )
}

export default UserAvatar
