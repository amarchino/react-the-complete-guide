import type { LoaderFunctionArgs } from 'react-router-dom';
import type { PostDTO } from '../../model/PostDTO';

export default async function postDetailsLoader(args: LoaderFunctionArgs) {
  const response = await fetch(`http://localhost:8080/posts/${args.params.id}`);
  const data: { post: PostDTO } = await response.json();
  return data.post;
}
