import { type FC } from 'react';
import PostsList from '../components/PostsList';
import { Outlet } from 'react-router-dom';

const Posts: FC = () => {
  return (
    <>
      <Outlet />
      <main>
        <PostsList />
      </main>
    </>
  );
}

export default Posts;
