// src/services/api.js
import axios from 'axios';

// The backend server is running on localhost port 3010
const baseUrl = 'http://127.0.0.1:3010';

// Create an axios "instance" to simplify requests
const api = axios.create({
  baseURL: baseUrl,
});

// GET all tasks
export const getTasks = () => api.get('/tasks');

// GET all tags
export const getTags = () => api.get('/tags');

/* We will add more functions here later for:
  - Creating a task (POST /tasks)
  - Deleting a task (DELETE /tasks/:id)
  - etc.
*/
