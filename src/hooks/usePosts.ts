import { useEffect } from "react"
import { useQuery } from "@tanstack/react-query"
import axios from 'axios'
import { IPost } from "../types/posts"
import { postService } from "../services/post.service"

  const initialData:{data:IPost[]}={
    data:[
      {
      body:'Initial body',
      id:0,
      title:'Initial title',
      userId:0
      }
    ]
  }

export function usePosts(isEnabled: boolean){
    const { data, isLoading, isSuccess, isError} = useQuery({
        // ОПЦИИ ЗАПРОСОВ!!!
        queryKey: ["posts"],
        queryFn: postService.getData,
        select: data => data.data,
        enabled:isEnabled,
        initialData,
        staleTime:1000,
      });

      console.log(data?.[0].body)
    
      useEffect(() => {
        if(isSuccess) console.log('Data success!')
      },[isSuccess, data])
    
      useEffect(()=>{
        if(isError) console.log('Error data')
      },[isError])

      return {data, isLoading, isSuccess, isError}
}