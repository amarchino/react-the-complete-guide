import { readFile, writeFile } from 'fs/promises';
import { type PostDTO } from '../model/PostDTO';

export async function getStoredPosts() {
  const rawFileContent = await readFile('posts.json', { encoding: 'utf-8' });
  const data = JSON.parse(rawFileContent) as { posts: PostDTO[] };
  return data.posts ?? [];
}

export function storePosts(posts: PostDTO[]) {
  return writeFile('posts.json', JSON.stringify({ posts: posts || [] }));
}
