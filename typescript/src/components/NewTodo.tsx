import type { FC, FormEvent } from 'react';

const NewTodo: FC = () => {
  function submitHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor='text'>Todo text</label>
      <input type="text" id="text" />
      <button>Add todo</button>
    </form>
  )
};
export default NewTodo;
