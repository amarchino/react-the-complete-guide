import { Await, redirect, useRouteLoaderData } from 'react-router-dom';
import EventItem from '../components/EventItem';
import EventsList from '../components/EventsList';
import { Suspense } from 'react';

export default function EventDetailPage() {
  const { event, events } = useRouteLoaderData('event-detail');

  return (
    <>
      <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading event...</p>}>
        <Await resolve={event}>
          { loadedEvent => <EventItem event={loadedEvent} /> }
        </Await>
      </Suspense>
      <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading events...</p>}>
        <Await resolve={events}>
          { loadedEvents => <EventsList events={loadedEvents} /> }
        </Await>
      </Suspense>
    </>
  );
}

export async function loader({ params }) {
  return {
    events: loadEvents(),
    event: await loadEvent(params.eventId)
  }
}

export async function action({ request, params }) {
  const response = await fetch(`http://localhost:8080/events/${params.eventId}`, { method: request.method });
  if(!response.ok) {
    throw new Response({ message: 'Could not delete event.' }, { status: 500 });
  }
  return redirect('/events');
}

async function loadEvents() {
  const response = await fetch('http://localhost:8080/events');
  if (!response.ok) {
    throw new Response(JSON.stringify({ message: 'Could not fetch events'}), { status: 500 });
  }
  const resData = await response.json();
  return resData.events;
}

async function loadEvent(id) {
  const response = await fetch(`http://localhost:8080/events/${id}`);
  if(!response.ok) {
    throw new Response({ message: 'Could not fetch details for selected event.' }, { status: 500 });
  }
  const resData = await response.json();
  return resData.event;
}
