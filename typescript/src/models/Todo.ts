export class Todo {
  id: string;
  text: string;

  constructor(todoText: string) {
    this.id = crypto.randomUUID();
    this.text = todoText;
  }
}
