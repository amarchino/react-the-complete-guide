import { createRoot } from 'react-dom/client'
import './index.css'
import { StrictMode } from 'react'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NewPost from './components/NewPost';
import RootLayout from './routes/RootLayout';

const router = createBrowserRouter([
  { path: '/', element: <RootLayout />, children: [
    { path: '/', element: <App /> },
    { path: '/create-post', element: <NewPost /> }

  ] }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={ router} />
  </StrictMode>
)
