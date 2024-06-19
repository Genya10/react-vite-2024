import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";
import { usePosts } from "./hooks/usePosts";
import { usePost } from "./hooks/usePostById";

const isAuth = true

function App() {
  
  const {data, isLoading, isSuccess, isError} = usePosts(isAuth)
  const {post} = usePost(3)

  console.log(post)

  return (
    <>
      <h1>React Vite Query</h1>
      {isLoading
        ? "Loading..."
        : data?.length
        ? data.map((post: any) => <div key={post.id}>{post.title}</div>)
        : "Not found"}
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
