import { Content } from 'antd/lib/layout/layout';
import * as React from 'react';
import style from './Todos.module.scss';
import TodosForm from '../components/todos-form/todosForm.component';
import TodosList from '../components/todos-list/todosList.component';

export default function Todos() {
  return (
    <Content className={style.todos__container}>
      <TodosForm />
      <TodosList />
    </Content>
  );
}
