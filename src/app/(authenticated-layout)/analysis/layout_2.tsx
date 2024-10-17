import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';

import MapProvider from '@/contexts/map-context';
import { UpstreamDataProvider } from '@/contexts/upstream-data-context';

const OurDataLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession();
  if (!session) return redirect('/api/auth/signin');
  return (
    <UpstreamDataProvider>
      <MapProvider apiKey={process.env.NEXT_GAPI_KEY!}>{children}</MapProvider>
    </UpstreamDataProvider>
  );
};

export default OurDataLayout;
