import { useQuery } from "@tanstack/react-query";

const getData = async () => {
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

export default App;

//https://jsonplaceholder.typicode.com/posts
///*eslint-disable-next-line @typescript-eslint/no-explicit-any */
