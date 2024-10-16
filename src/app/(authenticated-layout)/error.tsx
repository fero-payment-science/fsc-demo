'use client';

import { useEffect } from 'react';

export default function Error({ error }: { error: Error }) {
  useEffect(() => {
    console.error('ERROR MESSAGE: ', error.message);
    console.error(error);
  }, [error]);

  return (
    <div className="w-full h-full min-h-[800px] flex grow flex-col justify-center items-center">
      <p className="mx-2">It looks like something went wrong</p>
      <span className="text-xs text-slate-400">
        Apologies, please speak with the site admin
      </span>
    </div>
  );
}
