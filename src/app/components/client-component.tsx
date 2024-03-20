'use client';

import React from 'react';
import ServerComponetCopy from './server-component-copy';

export interface ClientComponentProps {
  children?: React.ReactNode;
}

export default function ClientComponet({ children }: ClientComponentProps) {
  console.log('Client Component');

  return (
    <div>
      <span>Client Component</span>
      {children}
    </div>
  );
}
