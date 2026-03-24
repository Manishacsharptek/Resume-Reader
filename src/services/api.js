import axios from 'axios';

// Vite handles environment variables via import.meta.env
// We use VITE_ prefix to expose them to the client
const BASE_URL = import.meta.env.VITE_BASE_URL || 'http://localhost:3090';

const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // For cookie support
});

export default api;
