import { useSearchParams } from 'react-router-dom'
import TaskForm from '../components/TaskForm.jsx'
import TaskRow from '../components/TaskRow.jsx'

const filters = [
  { value: 'all', label: 'Все' },
  { value: 'active', label: 'Активные' },
  { value: 'completed', label: 'Выполненные' },
]

function Tasks({ tasks, onAdd, onToggle, onDelete }) {
  const [searchParams, setSearchParams] = useSearchParams()
  const requestedFilter = searchParams.get('filter')
  const filter = filters.some((item) => item.value === requestedFilter) ? requestedFilter : 'all'
  const visibleTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.done
    if (filter === 'completed') return task.done
    return true
  })

  function selectFilter(value) {
    const nextParams = new URLSearchParams(searchParams)
    if (value === 'all') nextParams.delete('filter')
    else nextParams.set('filter', value)
    setSearchParams(nextParams)
  }

  return (
    <div className="tasks-page">
      <h2>Список задач</h2>
      <TaskForm onAdd={onAdd} />
      <section className="task-list-section">
        <div className="list-heading">
          <h3>Задачи</h3>
          <div className="filters" aria-label="Фильтр задач">
            {filters.map((item) => (
              <button
                type="button"
                key={item.value}
                className={filter === item.value ? 'selected' : ''}
                onClick={() => selectFilter(item.value)}
                aria-pressed={filter === item.value}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
        {visibleTasks.length ? (
          <>
            <div className="task-list-header" aria-hidden="true">
              <span />
              <span>Задача</span>
              <span>Дата создания</span>
              <span />
            </div>
            <ul className="task-list">
              {visibleTasks.map((task) => (
                <TaskRow key={task.id} task={task} onToggle={onToggle} onDelete={onDelete} />
              ))}
            </ul>
          </>
        ) : <p className="empty-state">Пусто</p>}
      </section>
    </div>
  )
}

export default Tasks
