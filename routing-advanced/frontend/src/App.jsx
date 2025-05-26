import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EventsPage, { loader as eventsLoader } from './pages/EventsPage';
import NewEventPage from './pages/NewEventPage';
import EventDetailPage, { loader as eventDetailLoader, action as deleteEventAction } from './pages/EventDetailPage';
import EditEventPage from './pages/EditEventPage';
import RootLayout from './pages/RootLayout';
import EventsRootLayout from './pages/EventsRootLayout';
import ErrorPage from './pages/ErrorPage';
import { action as manipulateEventAction } from './components/EventForm';
import NewsletterPage, { action as newsletterAction } from './pages/NewsletterPage';

const router = createBrowserRouter([
  { path: '/', element: <RootLayout />, errorElement: <ErrorPage />, children: [
    { index: true, element: <HomePage /> },
    { path: 'events', element: <EventsRootLayout />, children: [
      { index: true, element: <EventsPage />, loader: eventsLoader },
      { path: 'new', element: <NewEventPage />, action: manipulateEventAction },
      { path: ':eventId', id: 'event-detail', loader: eventDetailLoader, children: [
        { index: true, element: <EventDetailPage />, action: deleteEventAction },
        { path: 'edit', element: <EditEventPage />, action: manipulateEventAction }
      ]}
    ]},
    { path: 'newsletter', element: <NewsletterPage />, action: newsletterAction },
  ]}
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
