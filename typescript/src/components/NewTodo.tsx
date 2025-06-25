import { useRef, type FC, type FormEvent } from 'react';

const NewTodo: FC = () => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  function submitHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const enteredText = todoTextInputRef.current!.value.trim();
    if(enteredText.length === 0) {
      return;
    }

  }

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor='text'>Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add todo</button>
    </form>
  )
};
export default NewTodo;
