import { CheckOutlined, DeleteFilled, EditFilled } from '@ant-design/icons';
import { Breadcrumb, Button, Radio, RadioChangeEvent } from 'antd';
import todoApi from 'api/todoApi';
import classNames from 'classnames';
import { ListParams } from 'models';
import * as React from 'react';
import { useQuery } from 'react-query';
import style from './todosList.module.scss';

export default function TodosList() {
  const { data: todoList, refetch } = useQuery('todos', () =>
    todoApi.getAll(filter)
  );

  const [filter, setFilter] = React.useState<ListParams>({
    _limit: 10,
    _page: 1,
  });

  const handleRadioChange = (e: RadioChangeEvent) => {
    console.log(e.target.value);
    setFilter({ ...filter, completed: e.target.value });
  };

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
          <div
            key={todo.id}
            className={classNames(style.list__item, {
              [style.list__item__done]: todo.completed,
            })}
          >
            <button className={style.btn__update}>
              <CheckOutlined />
            </button>
            <div className={style.item__name}>
              <p>{todo.title}</p>
            </div>
            <button className={style.btn__edit} disabled={todo.completed}>
              <EditFilled />
            </button>
            <button className={style.btn__delete} disabled={todo.completed}>
              <DeleteFilled />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
