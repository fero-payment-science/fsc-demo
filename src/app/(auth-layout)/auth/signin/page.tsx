'use client';

import Image from 'next/image';
import { signIn } from 'next-auth/react';

export default function SigninPage() {
  const handleSignIn = (callbackUrl: string) => {
    signIn('google', { callbackUrl });
  };

  return (
    <div className="h-[600px] w-[400px] flex flex-col justify-center items-center">
      <div className="flex items-center mb-1">
        <Image
          className=" relative "
          src={'/images/fero-logo-full.svg'}
          height={70}
          width={250}
          alt={'fero-logo-text'}
        />
      </div>
      <div className="h-[100px] w-[380px] mt-2 rounded-md flex flex-col justify-center items-center">
        <p className="text-fero-primary font-semibold mb-4 text-[12px]">
          Sign in with your Fero email account:
        </p>
        <Image
          onClick={() => {
            handleSignIn(process.env.BASE_CALLBACK_URL ?? '');
          }}
          role="button"
          src={'/btn_google.svg'}
          height={75}
          width={220}
          alt={'google-logo'}
        />
      </div>
    </div>
  );
}
