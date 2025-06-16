import fs from 'node:fs/promises';

import ClientDemo from '@/components/ClientDemo';
import DataFetchingDemo from '@/components/DataFetchingDemo';
import RSCDemo from '@/components/RCSDemo';
import ServerActionsDemo from '@/components/ServerActionsDemo';
import UsePromiseDemo from '@/components/UsePromisesDemo';
import { Suspense } from 'react';

export default async function Home() {
  const fetchUsersPromise = new Promise(resolve => setTimeout(async () => {
    const data = await fs.readFile('dummy-db.json', 'utf-8');
    resolve(JSON.parse(data));
  }, 2000));

  return (
    <main>
      <RSCDemo />
      <ClientDemo />
      <DataFetchingDemo />
      <ServerActionsDemo />
      <Suspense fallback={<p>Loading users...</p>}>
        <UsePromiseDemo fetchUsersPromise={fetchUsersPromise} />
      </Suspense>
    </main>
  );
}
