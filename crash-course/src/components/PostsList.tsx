import { useState, type FC } from 'react';
import Post from './Post';
import classes from './PostsList.module.css'
import NewPost from './NewPost';
import Modal from './Modal';
import type { PostDTO } from '../model/PostDTO';

const PostsList: FC<{ isPosting: boolean, hideModalHandler: () => void }> = ({ isPosting, hideModalHandler }) => {
  const [ posts, setPosts ] = useState<PostDTO[]>([]);
  function addPostHandler(post: PostDTO) {
    setPosts(prevValue => [ post, ...prevValue ]);
  }
  return (
    <>
      { isPosting &&
        <Modal onClose={hideModalHandler}>
          <NewPost onCancel={hideModalHandler} onAddPost={addPostHandler} />
        </Modal>
      }
      <ul className={classes.posts}>
        { posts.map(post => <Post key={post.body} author={post.author} body={post.body} /> ) }

      </ul>
    </>
  );
}

export default PostsList;
