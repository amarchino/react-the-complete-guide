import { useEffect, useState, type FC } from 'react';
import Post from './Post';
import classes from './PostsList.module.css'
import NewPost from './NewPost';
import Modal from './Modal';
import type { PostDTO } from '../model/PostDTO';

const PostsList: FC<{ isPosting: boolean, hideModalHandler: () => void }> = ({ isPosting, hideModalHandler }) => {
  const [ posts, setPosts ] = useState<PostDTO[]>([]);
  const [ isFetching, setIsFetching ] = useState(false);
  useEffect(() => {
    async function fetchPosts() {
      setIsFetching(true);
      const response = await fetch('http://localhost:8080/posts');
      const data: { posts: PostDTO[] } = await response.json();
      setIsFetching(false);
      setPosts(data.posts);
    }
    fetchPosts();
  }, []);

  async function addPostHandler(post: PostDTO) {
    await fetch('http://localhost:8080/posts', {
      method: 'POST',
      body: JSON.stringify(post),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    setPosts(prevValue => [ post, ...prevValue ]);
  }
  return (
    <>
      { isPosting &&
        <Modal onClose={hideModalHandler}>
          <NewPost onCancel={hideModalHandler} onAddPost={addPostHandler} />
        </Modal>
      }
      { !isFetching && posts.length > 0 && <ul className={classes.posts}>
          { posts.map(post => <Post key={post.id} author={post.author} body={post.body} /> ) }
        </ul>
      }
      { !isFetching && posts.length === 0 && <div style={{ textAlign: 'center', color: 'white' }}>
          <p>There are no posts yet.</p>
          <p>Start adding some!</p>
        </div>
      }
      { isFetching && <div style={{ textAlign: 'center', color: 'white' }}>
          <p>Loading posts</p>
        </div>
      }
    </>
  );
}

export default PostsList;
