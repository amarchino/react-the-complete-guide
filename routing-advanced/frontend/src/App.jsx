import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EventsPage, { loader as eventsLoader } from './pages/EventsPage';
import NewEventPage, { action as newEventAction} from './pages/NewEventPage';
import EventDetailPage, { loader as eventDetailLoader, action as deleteEventAction } from './pages/EventDetailPage';
import EditEventPage from './pages/EditEventPage';
import RootLayout from './pages/RootLayout';
import EventsRootLayout from './pages/EventsRootLayout';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
  { path: '/', element: <RootLayout />, errorElement: <ErrorPage />, children: [
    { index: true, element: <HomePage /> },
    { path: 'events', element: <EventsRootLayout />, children: [
      { index: true, element: <EventsPage />, loader: eventsLoader },
      { path: 'new', element: <NewEventPage />, action: newEventAction },
      { path: ':eventId', id: 'event-detail', loader: eventDetailLoader, children: [
        { index: true, element: <EventDetailPage />, action: deleteEventAction },
        { path: 'edit', element: <EditEventPage /> }
      ]}
    ]}
  ] }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
