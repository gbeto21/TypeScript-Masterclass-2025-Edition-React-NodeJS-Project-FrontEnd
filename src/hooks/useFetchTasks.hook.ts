import { useQuery } from "@tanstack/react-query";

const fetchTask = async () => {
  const response = await fetch(`${import.meta.env.BASE_URL}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  if (!response.ok) {
    throw new Error("Network response not ok");
  }

  return await response.json();
};

export function useFetchTasks(params: {}) {
  return useQuery({
    queryKey: ["fetchTasks"],
    queryFn: fetchTask,
  });
}
