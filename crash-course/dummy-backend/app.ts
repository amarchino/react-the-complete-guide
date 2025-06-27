import express from 'express';
import { json } from 'body-parser';
import { getStoredPosts, storePosts } from './data/posts';
import { randomUUID } from 'crypto';

const stdin = process.stdin;
stdin.setRawMode(true);
stdin.resume();
stdin.setEncoding('utf8');

const app = express();

app.use(json());

app.use((_, res, next) => {
  // Attach CORS headers
  // Required when using a detached backend (that runs on a different domain)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/posts', async (_, res) => {
  const storedPosts = await getStoredPosts();
  // await new Promise(resolve => setTimeout(() => resolve(void 0), 1500));
  res.json({ posts: storedPosts });
});

app.get('/posts/:id', async (req, res) => {
  const storedPosts = await getStoredPosts();
  const post = storedPosts.find((post) => post.id === req.params.id);
  res.json({ post });
});

app.post('/posts', async (req, res) => {
  const existingPosts = await getStoredPosts();
  const postData = req.body;
  const newPost = {
    ...postData,
    id: randomUUID(),
  };
  const updatedPosts = [newPost, ...existingPosts];
  await storePosts(updatedPosts);
  res.status(201).json({ message: 'Stored new post.', post: newPost });
});

const server = app.listen(8080, () => {
  console.log('Server running on port 3000');
  console.log('press q to exit');
});

stdin.on('data', key => {
  const value = key.toString();
  if ( value === '\u0003' || value === 'q' ) {
    server.close();
    process.exit(0);
  }
});
