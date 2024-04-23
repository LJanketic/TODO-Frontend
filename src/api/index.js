const axiosRoutes = $axios => ({
    getAllTodos() {
      return $axios.get('/api/todos');
    },
    getSingleTodo(id) {
      return $axios.get(`/api/todos/${id}`);
    },
    createTodo(todoData) {
      return $axios.post('/api/todos', todoData);
    },
    updateTodo(id, todoData) {
      return $axios.patch(`/api/todos/${id}`, todoData);
    }
});

export default axiosRoutes;
