import { useLoaderData } from 'react-router-dom';
import EventsList from '../components/EventsList';

export default function EventsPage() {
  const fetchedEvents = useLoaderData();

  return (
    <EventsList events={fetchedEvents} />
  );
}
