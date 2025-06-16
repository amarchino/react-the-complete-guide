import ClientDemo from '@/components/ClientDemo';
import DataFetchingDemo from '@/components/DataFetchingDemo';
import RSCDemo from '@/components/RCSDemo';
import ServerActionsDemo from '@/components/ServerActionsDemo';
import UsePromiseDemo from '@/components/UsePromisesDemo';
import { Suspense } from 'react';

export default async function Home() {
  return (
    <main>
      <RSCDemo />
      <ClientDemo />
      <DataFetchingDemo />
      <ServerActionsDemo />
      <Suspense fallback={<p>Loading users...</p>}>
        <UsePromiseDemo />
      </Suspense>
    </main>
  );
}
