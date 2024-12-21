"use client";

import { useState } from "react";
import { useTodos } from "./useTodos";
import TodoInterval from "../TodoInterval";
import TodoInput from "../TodoInput";
import TodoList from "../TodoList";

export default function Todos() {
  const [value, setValue] = useState("");
  const [intervalMs, setIntervalMs] = useState(50000);

  const { todos, isFetching, addTodo } = useTodos({
    refetchInterval: intervalMs,
  });

  const handleAddTodo = () => {
    addTodo(value, {
      onSuccess: () => setValue(""),
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="w-96">
        <h1 className="text-2xl font-bold mb-4">Todo List</h1>
        <TodoInterval
          intervalMs={intervalMs}
          setIntervalMs={setIntervalMs}
          isFetching={isFetching}
        />
        <div className="border">
          <TodoInput
            value={value}
            setValue={setValue}
            onAddTodo={handleAddTodo}
          />
          <TodoList todos={todos} />
        </div>
      </div>
    </div>
  );
}
