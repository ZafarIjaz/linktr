'use client';

import React from 'react';
import { LinktreePage } from '../components/pages/LinktreePage';
import { ThemeToggle } from '../components/atoms/ThemeToggle';

export default function Home() {
  return (
    <>
      <ThemeToggle />
      <LinktreePage />
    </>
  );
}
