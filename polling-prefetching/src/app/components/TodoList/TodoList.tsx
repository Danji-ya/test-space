interface TodoListProps {
  todos: string[] | undefined;
}

export default function TodoList({ todos }: TodoListProps) {
  return (
    <ul>
      {todos?.map((todo, index) => (
        <li key={index} className="bg-gray-100 p-2 rounded mb-2 shadow-sm">
          {todo}
        </li>
      ))}
    </ul>
  );
}
