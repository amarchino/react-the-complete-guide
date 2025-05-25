import { useLoaderData } from 'react-router-dom';
import EventsList from '../components/EventsList';

export default function EventsPage() {
  const data = useLoaderData();
  if(data.isError) {
    return <p>{ data.message }</p>;
  }

  return (
    <EventsList events={data.events} />
  );
}

export async function loader() {
  const response = await fetch('http://localhost:8080/events');
  if (!response.ok) {
    throw new Error('Could not fetch events');
  } else {
    return response;
  }
}
