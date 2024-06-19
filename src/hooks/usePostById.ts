import { useQuery } from "@tanstack/react-query"
import axios from 'axios'
import { IPost } from "../types/posts"

const getData =  (id:number) => {
    return axios.get<IPost>(`https://jsonplaceholder.typicode.com/posts/${id}`);
  };

export function usePost(id:number){
    const { data, isLoading } = useQuery({
        // ОПЦИИ ЗАПРОСОВ!!!
        queryKey: ["post",id],
        queryFn:()=> getData(id),
        select: data => data.data,
        enabled:!!id
      });

      return {post:data, isLoading }
}