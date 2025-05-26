import { Await, useLoaderData } from 'react-router-dom';
import EventsList from '../components/EventsList';
import { Suspense } from 'react';

export default function EventsPage() {
  const data = useLoaderData();
  if(data.isError) {
    return <p>{ data.message }</p>;
  }

  return (
    <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
      <Await resolve={ data.events }>
        { (loadedEvents) => <EventsList events={ loadedEvents } /> }
      </Await>
    </Suspense>
  );
}

export function loader() {
  return {
    events: loadEvents()
  };
}

async function loadEvents() {
  const response = await fetch('http://localhost:8080/events');
  if (!response.ok) {
    throw new Response(JSON.stringify({ message: 'Could not fetch events'}), { status: 500 });
  }
  const resData = await response.json();
  return resData.events;
}
