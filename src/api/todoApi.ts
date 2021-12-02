import { ListParams, Todo } from 'models';
import axiosClient from './axiosClient';

const todoApi = {
  getAll(params: ListParams): Promise<Todo[]> {
    const url = 'todos';
    return axiosClient.get(url, { params });
  },
  getById(id: string): Promise<Todo> {
    const url = `todos/${id}`;
    return axiosClient.get(url);
  },
  add(data: Todo): Promise<Todo> {
    const url = 'todos';
    return axiosClient.post(url, data);
  },
  update(data: Todo): Promise<Todo> {
    const url = `todos/${data.id}`;
    return axiosClient.patch(url, data);
  },
  delete(id: string): Promise<any> {
    const url = `todos/${id}`;
    return axiosClient.delete(url);
  },
};

export default todoApi;
