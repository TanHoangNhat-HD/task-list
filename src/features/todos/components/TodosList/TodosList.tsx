import { Radio, RadioChangeEvent } from 'antd';
import todoApi from 'api/todoApi';
import { ListParams, Todo } from 'models';
import * as React from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import TodoItem from '../TodoItem/TodoItem';
import style from './TodosList.module.scss';

export default function TodosList() {
  const queryClient = useQueryClient();

  const [filter, setFilter] = React.useState<ListParams>({
    _limit: 10,
    _page: 1,
  });

  const { data: todoList, refetch } = useQuery('todos', () =>
    todoApi.getAll(filter)
  );

  const { mutate: updateTodo } = useMutation(
    (todo: Todo) => todoApi.update(todo),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('todos');
      },
    }
  );

  const { mutate: deleteTodo } = useMutation(
    (id: number) => todoApi.delete(id),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('todos');
      },
    }
  );

  const handleRadioChange = (e: RadioChangeEvent) => {
    console.log(e.target.value);
    setFilter({ ...filter, completed: e.target.value });
  };

  // const handleUpdate = (todo: Todo) => {
  //   updateTodo(todo);
  // };

  // const handleDelete = (id: number) => {
  //   deleteTodo(id);
  // };

  React.useEffect(() => {
    refetch();
  }, [filter, refetch]);

  return (
    <div className={style.list__container}>
      <Radio.Group
        className={style.tab__container}
        onChange={handleRadioChange}
      >
        <Radio.Button>All</Radio.Button>
        <Radio.Button value={false}>Todo</Radio.Button>
        <Radio.Button value={true}>Completed</Radio.Button>
      </Radio.Group>
      <div className={style.todos__list}>
        {todoList?.map((todo) => (
          <TodoItem
            key={todo.id}
            onDelete={deleteTodo}
            onUpdate={updateTodo}
            todo={todo}
          />
        ))}
      </div>
    </div>
  );
}
