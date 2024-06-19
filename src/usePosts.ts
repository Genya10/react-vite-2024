import { useEffect } from "react"
import { useQuery } from "@tanstack/react-query"
import axios from 'axios'

const getData =  () => {
    return axios.get("https://jsonplaceholder.typicode.com/posts");
  };

export function usePosts(isEnabled: boolean){
    const { data, isLoading, isSuccess, isError} = useQuery({
        // ОПЦИИ ЗАПРОСОВ!!!
        queryKey: ["posts"],
        queryFn: getData,
        select: data => data.data,
        enabled:isEnabled
      });
    
      useEffect(() => {
        if(isSuccess) console.log('Data success!')
      },[isSuccess, data])
    
      useEffect(()=>{
        if(isError) console.log('Error data')
      },[isError])

      return {data, isLoading, isSuccess, isError}
}