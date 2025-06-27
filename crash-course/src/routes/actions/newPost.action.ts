import { redirect, type ActionFunctionArgs } from 'react-router-dom';

export default async function newPostAction(param: ActionFunctionArgs) {
  const formData = await param.request.formData();
  const postData = Object.fromEntries(formData);

  await fetch('http://localhost:8080/posts', {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return redirect('/');
}
