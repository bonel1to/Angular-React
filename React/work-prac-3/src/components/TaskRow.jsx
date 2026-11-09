import { Link } from 'react-router-dom'

const dateFormatter = new Intl.DateTimeFormat('ru-RU', {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
})

function TaskRow({ task, onToggle, onDelete }) {
  function handleDelete() {
    if (window.confirm(`Удалить задачу «${task.title}»?`)) onDelete(task.id)
  }

  return (
    <li className={`task-item${task.done ? ' is-done' : ''}`}>
      <input
        className="task-item__checkbox"
        type="checkbox"
        checked={task.done}
        onChange={() => onToggle(task.id)}
        aria-label={task.done ? 'Вернуть задачу в работу' : 'Отметить задачу выполненной'}
      />
      <Link className="task-item__title" to={`/tasks/${task.id}`}>
        <span className="task-item__text">{task.title}</span>
        {task.description && <span className="task-item__description">{task.description}</span>}
      </Link>
      <time className="task-item__date" dateTime={task.createdAt}>
        {dateFormatter.format(new Date(task.createdAt))}
      </time>
      <button type="button" onClick={handleDelete} aria-label={`Удалить задачу «${task.title}»`}>
        ×
      </button>
    </li>
  )
}

export default TaskRow
