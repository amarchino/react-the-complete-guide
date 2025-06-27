import type { PostDTO } from '../../model/PostDTO';

export default async function postsLoader() {
  const response = await fetch('http://localhost:8080/posts');
  const data: { posts: PostDTO[] } = await response.json();
  return data.posts ?? [];
}
