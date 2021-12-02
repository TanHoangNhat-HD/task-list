import * as React from "react";
import { Form, Input } from "antd";
import style from "./todosForm.module.scss";
import { useForm, Controller } from "react-hook-form";

type FormData = {
  taskName: string;
  status: TaskStatus;
};

enum TaskStatus {
  PENDING,
  COMPLETE
}

export default function TodosForm() {
  const { handleSubmit, control, setValue } = useForm<FormData>();

  const handleFormSubmit = (data: FormData) => {
    setValue("status", TaskStatus.PENDING);
    console.log(data);
    setValue("taskName", "");
  };

  return (
    <div className={style.form__container}>
      <Form
        name="normal_login"
        onFinish={handleSubmit(handleFormSubmit)}
        initialValues={{ remember: true }}
        className={style.todos__form}
      >
        <Form.Item>
          <Controller
            name="taskName"
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
