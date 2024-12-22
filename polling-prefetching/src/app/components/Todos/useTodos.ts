import {
  useQuery,
  useMutation,
  useQueryClient,
  UseQueryOptions,
} from "@tanstack/react-query";
import axios from "axios";

type Todo = string;

export const getTodos = async (): Promise<Todo[]> => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_DOMAIN}/api/todos`
  );
  return response.data;
};

export const addTodo = async (item: string) => {
  await axios.post("/api/todos", { item });
};

interface UseTodosOptions
  extends Omit<UseQueryOptions<Todo[], unknown>, "queryKey" | "queryFn"> {
  refetchInterval?: number;
}

export const useTodos = (options?: UseTodosOptions) => {
  const queryClient = useQueryClient();

  const { data: todos, isFetching } = useQuery<Todo[], unknown>({
    queryKey: ["todos"],
    queryFn: getTodos,
    ...options,
  });

  const addMutation = useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  return {
    todos,
    isFetching,
    addTodo: addMutation.mutate,
  };
};
