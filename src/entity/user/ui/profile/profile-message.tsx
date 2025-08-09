'use client'

import { useLanguageStore } from '@/entity/language'

interface ProfileMessageProps {
  type: 'error' | 'empty'
}

export const ProfileMessage = ({ type }: ProfileMessageProps) => {
  const { language } = useLanguageStore()

  const messages = {
    error: {
      ua: 'Помилка завантаження профілю',
      eng: 'Error loading profile'
    },
    empty: {
      ua: 'Профіль не знайдено',
      eng: 'Profile not found'
    }
  }

  const message = messages[type][language]
  const colorClass = type === 'error' ? 'text-red-500' : 'text-gray-500'

  return (
    <div className={`flex items-center justify-center min-h-[200px] ${colorClass}`}>
      {message}
    </div>
  )
} 