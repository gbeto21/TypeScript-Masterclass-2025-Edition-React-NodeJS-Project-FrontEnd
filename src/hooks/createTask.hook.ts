import type { ITask } from "@/types/task.interface";
import { useMutation } from "@tanstack/react-query";

const createTask = async (task: ITask) => {
  const response = await fetch(`http://localhost:3001/tasks/create`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  });

  if (!response.ok) {
    throw new Error("Network response not ok");
  }

  return await response.json();
};

export const useCreateTask = () => {
  return useMutation({
    mutationFn: createTask,
    onSuccess: (response) => console.log(response),
    onError: (error) => console.error(error),
  });
};
