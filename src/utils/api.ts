import axios from 'axios';

export const getPosts = () =>
    axios.get('http://my-json-server.typicode.com/typicode/demo/posts');