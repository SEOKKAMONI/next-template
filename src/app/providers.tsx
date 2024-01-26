'use client';

import { type PropsWithChildren } from 'react';
import { StyleProvider } from '@/providers';
import { OverlayProvider } from '@toss/use-overlay';

export default function Providers({ children }: PropsWithChildren) {
  return (
    <StyleProvider>
      <OverlayProvider>{children}</OverlayProvider>
    </StyleProvider>
  );
}
