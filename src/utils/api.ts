import axios from 'axios';
import { Post } from './types';

export const getPosts = () =>
    axios.get<Post[]>('http://my-json-server.typicode.com/typicode/demo/posts');