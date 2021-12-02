import { Content } from 'antd/lib/layout/layout';
import * as React from 'react';
import TodosForm from '../../features/todos/components/todos-form/todosForm.component';
import TodosList from '../../features/todos/components/todos-list/todosList.component';
import style from './taskList.module.scss';

export default function TaskListPage() {
  return (
    <Content className={style.task__list__container}>
      <TodosForm />
      <TodosList />
    </Content>
  );
}
