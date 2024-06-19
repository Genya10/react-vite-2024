import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getData =  () => {
  return axios.get("https://jsonplaceholder.typicode.com/posts");
};

function App() {
  const { data, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: getData,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Проверка на наличие данных
  if (!data) {
    return <div>Data not found</div>;
  }

  // Извлечение различных свойств из объекта ответа
  const posts = data.data; // Массив постов
  const status = data.status; // Статус ответа (например, 200)
  const headers = data.headers; // Заголовки ответа
  const statusText = data.statusText; // Текст статуса (например, "OK")

  console.log("Status:", status);
  console.log("Headers:", headers);
  console.log("Status Text:", statusText);

  return (
    <>
      <h1>React Vite Query</h1>
      {posts.length ? (
        posts.map((post:any) => <div key={post.id}>{post.title}</div>)
      ) : (
        "No posts found"
      )}
    </>
  );
  /*return (
    <>
      <h1>React Vite Query</h1>
      {isLoading
        ? "Loading..."
        : data?.data?.length
        ? data.data.map((post: any) => <div key={post.id}>{post.title}</div>)
        : "Not found"}
    </>
  );*/
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
