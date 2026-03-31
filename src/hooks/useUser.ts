import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { User } from "../types";

const fetchUser = async (id: number): Promise<User> => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`,
  );
  return data;
};

export const useUser = (id: number) => {
  return useQuery({
    queryKey: ["user", id],
    queryFn: () => fetchUser(id),
    enabled: !!id,
  });
};
