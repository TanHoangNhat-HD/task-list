import { CheckOutlined, DeleteFilled, EditFilled } from '@ant-design/icons';
import classNames from 'classnames';
import { Todo } from 'models';
import * as React from 'react';
import style from './TodoItem.module.scss';

interface TodoItemProp {
  todo: Todo;
  onUpdate: (todo: Todo) => void;
  onDelete: (id: number) => void;
}

export default function TodoItem({ todo, onUpdate, onDelete }: TodoItemProp) {
  const [isEditting, setIsEditting] = React.useState<Boolean>(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleInputSubmit = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      setIsEditting(!isEditting);
      const target = e.target as HTMLTextAreaElement;
      onUpdate({ ...todo, title: target.value });
    } else if (e.key === 'Escape') {
      setIsEditting(!isEditting);
    }
  };

  React.useEffect(() => {
    inputRef.current?.focus();
  }, [isEditting]);

  return (
    <div
      key={todo.id}
      className={classNames(style.list__item, {
        [style.list__item__done]: todo.completed,
      })}
    >
      <button
        onClick={() => onUpdate({ ...todo, completed: !todo.completed })}
        className={style.btn__update}
      >
        <CheckOutlined />
      </button>
      <div className={style.item__name}>
        {isEditting ? (
          <input
            className={style.item__input}
            defaultValue={todo.title}
            ref={inputRef}
            onKeyUp={handleInputSubmit}
          />
        ) : (
          <p>{todo.title}</p>
        )}
      </div>
      <button
        onClick={() => setIsEditting(!isEditting)}
        className={style.btn__edit}
        disabled={todo.completed}
      >
        <EditFilled />
      </button>
      <button
        onClick={() => onDelete(todo.id)}
        className={style.btn__delete}
        disabled={todo.completed}
      >
        <DeleteFilled />
      </button>
    </div>
  );
}
