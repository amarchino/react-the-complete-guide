import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import EditEventPage from './pages/EditEventPage';
import ErrorPage from './pages/ErrorPage';
import EventDetailPage, { loader as eventDetailLoader, action as deleteEventAction } from './pages/EventDetailPage';
import EventsPage, { loader as eventsLoader } from './pages/EventsPage';
import EventsRootLayout from './pages/EventsRootLayout';
import HomePage from './pages/HomePage';
import NewEventPage from './pages/NewEventPage';
import RootLayout from './pages/RootLayout';
import { action as manipulateEventAction } from './components/EventForm';
import NewsletterPage, { action as newsletterAction } from './pages/NewsletterPage';
import AuthenticationPage, { action as authAction } from './pages/AuthenticationPage';
import { action as logoutAction } from './pages/LogoutPage';
import { checkAuthToken, tokenLoader } from './util/auth';

const router = createBrowserRouter([
  { path: '/', element: <RootLayout />, errorElement: <ErrorPage />, id: 'root', loader: tokenLoader, children: [
    { index: true, element: <HomePage /> },
    { path: 'events', element: <EventsRootLayout />, children: [
      { index: true, element: <EventsPage />, loader: eventsLoader },
      { path: ':eventId', id: 'event-detail', loader: eventDetailLoader, children: [
        { index: true, element: <EventDetailPage />, action: deleteEventAction },
        { path: 'edit', element: <EditEventPage />, action: manipulateEventAction, loader: checkAuthToken },
      ]},
      { path: 'new', element: <NewEventPage />, action: manipulateEventAction, loader: checkAuthToken }
    ]},
    { path: 'newsletter', element: <NewsletterPage />, action: newsletterAction },
    { path: 'auth', element: <AuthenticationPage />, action: authAction  },
    { path: 'logout', action: logoutAction  },
  ]},
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
