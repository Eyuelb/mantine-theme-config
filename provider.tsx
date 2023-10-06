'use client';

import { MantineProvider as Provider, MantineThemeOverride } from '@mantine/core';

import { theme as baseTheme } from './theme';

import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css'; 

export default function MantineProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme: Partial<MantineThemeOverride> = baseTheme;

  return <Provider theme={theme}>{children}</Provider>;
}