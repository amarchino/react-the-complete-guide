import { useLoaderData } from 'react-router-dom';
import EventItem from '../components/EventItem';

export default function EventDetailPage() {
  const data = useLoaderData();

  return (
    <EventItem event={data.event} />
  );
}

export async function loader({ params }) {
  const response = await fetch(`http://localhost:8080/events/${params.eventId}`);
  if(!response.ok) {
    throw new Response({ message: 'Could not fetch details for selected event.' }, { status: 500 });
  }
  return response;
}
