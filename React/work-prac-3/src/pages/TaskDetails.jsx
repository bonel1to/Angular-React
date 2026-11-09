import { Link, useNavigate, useParams } from 'react-router-dom'

function TaskDetails({ tasks, onToggle, onDelete }) {
  const { taskId } = useParams()
  const navigate = useNavigate()
  const task = tasks.find((item) => item.id === taskId)

  if (!task) {
    return <section className="detail-card"><h2>Задача не найдена</h2><Link to="/tasks">Назад к задачам</Link></section>
  }

  function handleDelete() {
    if (window.confirm(`Удалить задачу «${task.title}»?`)) {
      onDelete(task.id)
      navigate('/tasks')
    }
  }

  return (
    <div className="details-page">
      <button onClick={() => navigate(-1)}>← Назад</button>
      <article className="detail-card">
        <h2>{task.title}</h2>
        <p>Описание: {task.description || 'Не указано'}</p>
        <p>Дата создания: {new Date(task.createdAt).toLocaleDateString('ru-RU')}</p>
        <p>Статус: {task.done ? 'Выполнена' : 'Активна'}</p>
        <button className="primary-button" onClick={() => onToggle(task.id)}>{task.done ? 'Вернуть в работу' : 'Отметить выполненной'}</button>
        <button className="danger-button" onClick={handleDelete}>Удалить</button>
      </article>
    </div>
  )
}

export default TaskDetails
