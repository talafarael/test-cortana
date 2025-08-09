'use client'

import { useEffect } from 'react'
import { useUserStore } from '../../store'
import { ProfileSkeleton } from './profile-skeleton'
import { ProfileMessage } from './profile-message'
import { ProfileContent } from './profile-content'

export const UserProfile = () => {
  const { user, loading, error } = useUserStore()


  if (error) {
    return <ProfileMessage type="error" />
  }

  if (loading) {
    return <ProfileSkeleton />
  }

  if (!user) {
    return <ProfileMessage type="empty" />
  }

  return <ProfileContent user={user} />
} 
