import cn from 'classnames/bind';
import styles from './main.view.module.scss';
import TodoContainer from '../components/Todo/TodoContainer';
import React from 'react';

const cx = cn.bind(styles);

const MainView = () => {
  const [todo, setTodo] = React.useState<string[]>([]);
  const input = React.useRef<HTMLInputElement>(null);
  const button = React.useRef<HTMLButtonElement>(null);
  const handleAdd = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (input.current?.value && button.current?.textContent === 'Add') {
      setTodo([...todo, input.current.value]);
      input.current.value = '';
    } else if (input.current?.value && button.current?.textContent === 'Save') {
      setTodo(todo.map((_, index) => (index === todo.length - 1 ? input.current!.value! : _)));
      button.current.textContent = 'Add';
      input.current.value = '';
    }
  };
  return (
    <div className={cx('MainWrapper')}>
      <h1 className={cx('MainTitle')}>TODO</h1>
      <div className={cx('TodoWrapper')}>
        {todo.map((t, i) => {
          return (
            <TodoContainer
              key={i}
              todo={t}
              deleteFunc={() => {
                setTodo(todo.filter((_, index) => index !== i));
              }}
              editFunc={() => {
                if (button.current?.textContent === 'Add') {
                  input.current!.value = t;
                  button.current.textContent = 'Save';
                  input.current?.focus();
                } else {
                  if (button.current) {
                    button.current.textContent = 'Add';
                  }
                }
              }}
            />
          );
        })}
      </div>
      <div className={cx('InputWrapper')}>
        <input type="text" className={cx('InputField')} ref={input} />
        <button className={cx('AddButton')} ref={button} onClick={handleAdd}>
          Add
        </button>
      </div>
    </div>
  );
};

export default MainView;
