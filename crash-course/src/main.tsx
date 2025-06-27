import { createRoot } from 'react-dom/client'
import './index.css'
import { StrictMode } from 'react'
import Posts from './routes/Posts'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NewPost from './routes/NewPost';
import RootLayout from './routes/RootLayout';
import postsLoader from './routes/loaders/posts.loader';

const router = createBrowserRouter([
  { path: '/', element: <RootLayout />, children: [
    { path: '/', element: <Posts />, loader: postsLoader, children: [
      { path: '/create-post', element: <NewPost /> }
    ] },
  ] }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={ router} />
  </StrictMode>
)
