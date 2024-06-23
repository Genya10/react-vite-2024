import { useQuery,useQueryClient,useMutation, useIsFetching, useIsMutating } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";
import { usePosts } from "./hooks/usePosts";
import { usePost } from "./hooks/usePostById";
import { IPost } from "./types/posts";

function App() {

const queryClient = useQueryClient()

  const {mutate,isPending} = useMutation({
    mutationKey:['add post'],
    mutationFn: async (newPost:Omit<IPost, 'id'> ) => axios.post
        ('https://jsonplaceholder.typicode.com/posts', newPost),
        onSuccess:()  => {
          queryClient.invalidateQueries({queryKey:['posts']})
        }
  })

  //const isFetching = useIsFetching()
  //const isMutating = useIsMutating()

  return (
    <>
      <h1>React Vite Query</h1>
      <button onClick={()=>{
       mutate({
        body:'New body',
        userId:1,
        title:'New title'
       })
      }}
      disabled={isPending}>
        {isPending ?'Loading...' : 'Create'}
      </button>
    </>
  );
}

export default App;


/*const getData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  console.log(response);
  return response.json();
};

function App() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: getData,
  });
  console.log(error);

  return (
    <>
      <h1>React Vite Query</h1>
      {isLoading
        ? "Loading..."
        : data?.length
        ? data.map((post: any) => <div key={post.id}>{post.title}</div>)
        : "Loading..."}
    </>
  );
}

export default App;*/

//https://jsonplaceholder.typicode.com/posts
///*eslint-disable-next-line @typescript-eslint/no-explicit-any */
