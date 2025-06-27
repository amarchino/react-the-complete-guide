import { type FC } from 'react';
import Post from './Post';
import classes from './PostsList.module.css'
import type { PostDTO } from '../model/PostDTO';
import { useLoaderData } from 'react-router-dom';

const PostsList: FC = () => {
  const posts = useLoaderData<PostDTO[]>();

  // async function addPostHandler(post: PostDTO) {
  //   await fetch('http://localhost:8080/posts', {
  //     method: 'POST',
  //     body: JSON.stringify(post),
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   });
  //   setPosts(prevValue => [ post, ...prevValue ]);
  // }
  return (
    <>
      { posts.length > 0 && <ul className={classes.posts}>
          { posts.map(post => <Post key={post.id} author={post.author} body={post.body} /> ) }
        </ul>
      }
      { posts.length === 0 && <div style={{ textAlign: 'center', color: 'white' }}>
          <p>There are no posts yet.</p>
          <p>Start adding some!</p>
        </div>
      }
    </>
  );
}

export default PostsList;
