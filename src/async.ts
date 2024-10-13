import { Post } from "./types";
import axios from "axios";

export const getPost = async (postId: number): Promise<Post | null> => {
    try {
        const response = await axios.get<Post>(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}