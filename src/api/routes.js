import axiosInstance from './index';

const axiosRoutes = {
  getAllTodos() {
    return axiosInstance.get('/api/todos');
  },
  getSingleTodo(id) {
    return axiosInstance.get(`/api/todos/${id}`);
  },
  createTodo(todoData) {
    return axiosInstance.post('/api/todos', todoData);
  },
  updateTodo(id, todoData) {
    return axiosInstance.patch(`/api/todos/${id}`, todoData);
  }
};

export default axiosRoutes;
