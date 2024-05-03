import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import axiosRoutes from '../../api/routes';

const TodoContext = createContext();

export const useTodoContext = () => useContext(TodoContext);

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [sortOrder, setSortOrder] = useState('DESC');

  const refreshTodoList = useCallback(async () => {
    try {
      const { data } = await axiosRoutes.getAllTodosSorted(sortOrder);
      setTodos(data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  }, [sortOrder]);

  const addTodo = async (todoData) => {
    try {
      await axiosRoutes.createTodo(todoData);
      refreshTodoList();
    } catch (error) {
      console.error('Error adding a new todo:', error);
    }
  };

  const deleteTodo = async (todoId) => {
    try {
      await axiosRoutes.deleteTodo(todoId);
      refreshTodoList();
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  const updateTodo = async (updatedTodo) => {
    try {
      await axiosRoutes.updateTodo(updatedTodo.id, updatedTodo);
      refreshTodoList();
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  };

  useEffect(() => {
    refreshTodoList();
  }, [sortOrder, refreshTodoList]);

  return (
    <TodoContext.Provider
      value={{ todos, sortOrder, setSortOrder, addTodo, deleteTodo, updateTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

TodoProvider.propTypes = {
  children: PropTypes.node.isRequired
};
