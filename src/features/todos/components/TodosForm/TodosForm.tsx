import { Form, Input } from 'antd';
import todoApi from 'api/todoApi';
import { Todo } from 'models';
import * as React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';
import style from './TodosForm.module.scss';

export default function TodosForm() {
  const queryClient = useQueryClient();
  const { handleSubmit, control, setValue } = useForm<Todo>();

  const { mutate: addTodo } = useMutation((todo: Todo) => todoApi.add(todo), {
    onSuccess: () => {
      queryClient.invalidateQueries('todos');
    },
  });

  const handleFormSubmit = (data: Todo, e: any) => {
    if (e.key === 'Enter') {
      addTodo({ ...data, userId: 1, completed: false });
      setValue('title', '');
    } else if (e.key === 'Escape') {
      setValue('title', '');
    }
  };

  return (
    <div className={style.form__container}>
      <Form
        name="normal_login"
        // onFinish={}
        initialValues={{ remember: true }}
        className={style.todos__form}
        onKeyUp={handleSubmit(handleFormSubmit)}
      >
        <Form.Item>
          <Controller
            name="title"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                className={style.todos__form__input}
                placeholder="Enter your tasks!!!"
              />
            )}
          />
        </Form.Item>
      </Form>
    </div>
  );
}
