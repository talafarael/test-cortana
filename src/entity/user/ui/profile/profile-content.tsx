'use client'

import { useLanguageStore } from '@/entity/language'
import { Card, CardHeader, CardTitle, CardContent } from '@/shared/components/ui/card'
import { Avatar } from '@/shared/components/ui/avatar'
import { IUserProfile } from '../../model'

interface ProfileContentProps {
  user: IUserProfile
}

interface ProfileFieldProps {
  label: {
    ua: string
    eng: string
  }
  value: string
}

const ProfileField = ({ label, value }: ProfileFieldProps) => {
  const { language } = useLanguageStore()

  return (
    <>
      <div className="text-sm text-gray-500">
        {label[language]}
      </div>
      <div className="text-sm">{value}</div>
    </>
  )
}

export const ProfileContent = ({ user }: ProfileContentProps) => {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <div className="flex items-center space-x-4">
          <Avatar className="h-12 w-12">
            <span className="text-xl">{user.username[0].toUpperCase()}</span>
          </Avatar>
          <CardTitle>{user.username}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <ProfileField
            label={{ ua: 'Електронна пошта', eng: 'Email' }}
            value={user.email}
          />
          <ProfileField
            label={{ ua: 'Ім\'я користувача', eng: 'Username' }}
            value={user.username}
          />
        </div>
      </CardContent>
    </Card>
  )
} 
