interface TodoInputProps {
  value: string;
  setValue: (value: string) => void;
  onAddTodo: () => void;
}

export default function TodoInput({
  value,
  setValue,
  onAddTodo,
}: TodoInputProps) {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onAddTodo();
      }}
      className="mb-4"
    >
      <input
        placeholder="Enter something"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="border rounded p-2 w-full"
      />
    </form>
  );
}
