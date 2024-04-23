import axiosInstance from './index';

const axiosRoutes = {
  getAllTodos() {
    return axiosInstance.get('/api/todos');
  },
  getAllTodosSorted(sortOrder) {
    return axiosInstance.get(`/api/todos?sort=${sortOrder}`);
  },
  getSingleTodo(id) {
    return axiosInstance.get(`/api/todos/${id}`);
  },
  createTodo(todoData) {
    return axiosInstance.post('/api/todos', todoData);
  },
  updateTodo(id, todoData) {
    return axiosInstance.patch(`/api/todos/${id}`, todoData);
  },
  deleteTodo(id) {
    return axiosInstance.delete(`/api/todos/${id}`);
  }
};

export default axiosRoutes;
