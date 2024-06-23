import axios from "axios";
import { IPost } from "../types/posts";

class PostService {

    private URL = 'https://jsonplaceholder.typicode.com/posts'
    
     getData (){
        return axios.get<IPost[]>(this.URL);
      };

     getDataId(id:number) {
        return axios.get<IPost>(`${this.URL}/id`);
      };
}

export const postService = new PostService()

