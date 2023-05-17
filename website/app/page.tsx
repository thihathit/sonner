'use client';

import { Toaster, toast } from 'sonner';
import { ThirdPartyLibrary } from 'third-party-library';

export default function Home() {
  return (
    <>
      <ThirdPartyLibrary />

      <div>
        <Toaster />

        <button
          onClick={() => {
            toast.success('From Website');
          }}
        >
          Website's Toast
        </button>
      </div>
    </>
  );
}
