import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { User } from "../types";

const fetchUsers = async (): Promise<User[]> => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/users?_limit=6",
  );
  return data;
};

export const useUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });
};
