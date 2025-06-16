import fs from 'node:fs/promises';

import ClientDemo from '@/components/ClientDemo';
import DataFetchingDemo from '@/components/DataFetchingDemo';
import RSCDemo from '@/components/RCSDemo';
import ServerActionsDemo from '@/components/ServerActionsDemo';
import UsePromiseDemo from '@/components/UsePromisesDemo';
import { Suspense } from 'react';
import ErrorBoundary from '@/components/ErrorBoundary';

export default async function Home() {
  const fetchUsersPromise = new Promise((resolve, reject) => setTimeout(async () => {
    const data = await fs.readFile('dummy-db.json', 'utf-8');
    if(Math.random() > 0.5) {
      resolve(JSON.parse(data));
    } else {
      reject(new Error('Error!'));
    }
  }, 2000));

  return (
    <main>
      <RSCDemo />
      <ClientDemo />
      <DataFetchingDemo />
      <ServerActionsDemo />
      <ErrorBoundary fallback={<p>Something went wrong</p>}>
        <Suspense fallback={<p>Loading users...</p>}>
          <UsePromiseDemo fetchUsersPromise={fetchUsersPromise} />
        </Suspense>
      </ErrorBoundary>
    </main>
  );
}
