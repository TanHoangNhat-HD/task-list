import { Content } from 'antd/lib/layout/layout';
import TodosForm from '../components/TodosForm/TodosForm';
import TodosList from '../components/TodosList/TodosList';
import style from './Todos.module.scss';

export default function Todos() {
  return (
    <Content className={style.todos__container}>
      <TodosForm />
      <TodosList />
    </Content>
  );
}
