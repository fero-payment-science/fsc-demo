'use client';

import Image from 'next/image';
import { signIn } from 'next-auth/react';

export default function SigninPage() {
  const handleSignIn = (callbackUrl: string) => {
    signIn('google', { callbackUrl });
  };

  return (
    <div className="h-[600px] w-[400px] flex flex-col justify-center items-center relative bottom-[10vh]">
      <div className="flex items-center mb-1 relative top-[20px] z-1">
        <Image
          className=" relative "
          src={'/fero-logo-letter.svg'}
          height={70}
          width={250}
          alt={'fero-logo-text'}
        />
      </div>
      <h1 className='font-extrabold text-3xl italic font-merriweather relative z-5'>FERO SMART CHECKOUT</h1>
      <div className="h-[100px] w-[380px] mt-1 rounded-md flex flex-col justify-center items-center">
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
