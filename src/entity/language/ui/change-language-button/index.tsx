"use client"

import React from 'react'
import { useLanguageStore } from '../../store';
import { Button } from '@/shared/components/ui/button';

export const ChangeLanguageButton = () => {
  const { switchLanguage, language } = useLanguageStore();

  return (
    <Button variant="outline" onClick={switchLanguage}>
      {language === "ua" ? "Українська" : "English"}
    </Button>
  );
}
