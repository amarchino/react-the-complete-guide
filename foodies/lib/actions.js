'use server';

import { redirect } from 'next/navigation';
import { saveMeal } from './meals';
import { revalidatePath } from 'next/cache';

function isInvalidEmail(email) {
  return !email.includes('@');
}
function isInvalidFile(file) {
  return !file || file.size === 0;
}

export async function shareMeal(prevState, formData) {
  const meal = {
    title: formData.get('title')?.trim() || '',
    summary: formData.get('summary')?.trim() || '',
    instructions: formData.get('instructions')?.trim() || '',
    image: formData.get('image'),
    creator: formData.get('name')?.trim() || '',
    creator_email: formData.get('email')?.trim() || ''
  };

  if(
      meal.title === ''
      || meal.summary === ''
      || meal.instructions === ''
      || meal.creator === ''
      || meal.creator_email === ''
      || isInvalidEmail(meal.creator_email)
      || isInvalidFile(meal.image)) {
    return {
      message: 'Invalid input.'
    };
  }
  await saveMeal(meal);
  revalidatePath('/meals')
  redirect('/meals');
}
