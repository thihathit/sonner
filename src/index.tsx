'use client';

import React from 'react';
import { Toaster, toast } from 'sonner';

export const ThirdPartyLibrary: React.FC = () => (
  <div>
    <Toaster position="bottom-left" />
    <button
      onClick={() => {
        toast.success('From ThirdPartyLibrary');
      }}
    >
      ThirdPartyLibrary's Toast
    </button>
  </div>
);
