import React from 'react';
import styles from './TodoContainer.module.scss';
import cn from 'classnames/bind';

const cx = cn.bind(styles);

type TodoContainerProps = React.PropsWithChildren<{
  todo: string;
  deleteFunc: () => void;
  editFunc: () => void;
}>;

export default function TodoContainer(props: TodoContainerProps) {
  const { todo, deleteFunc, editFunc } = props;
  const [completed, setCompleted] = React.useState(false);
  const checkBox = React.useRef<HTMLDivElement>(null);
  return (
    <div className={cx('TodoContainer')}>
      <div
        className={cx('CompleteCheckbox', {
          Checked: completed,
        })}
        ref={checkBox}
        onClick={() => {
          setCompleted(!completed);
        }}
      >
        {completed && '✓'}
      </div>
      <div
        className={cx('TodoContent', {
          Completed: completed,
        })}
      >
        {todo}
      </div>
      <div className={cx('TodoButtons')}>
        <button className={cx('EditButton')} onClick={editFunc}>
          Edit
        </button>
        <button className={cx('DeleteButton')} onClick={deleteFunc}>
          Delete
        </button>
      </div>
    </div>
  );
}
