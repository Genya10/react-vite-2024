import { useQuery } from "@tanstack/react-query"
import axios from 'axios'
import { IPost } from "../types/posts"
import { postService } from "../services/post.service";

export function usePost(id:number){
    const { data, isLoading } = useQuery({
        // ОПЦИИ ЗАПРОСОВ!!!
        queryKey: ["post",id],
        queryFn:()=> postService.getDataId(id),
        select: data => data.data,
        enabled:!!id
      });

      return {post:data, isLoading }
}