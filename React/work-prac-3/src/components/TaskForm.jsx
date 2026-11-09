import { useState } from 'react'

function TaskForm({ onAdd }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    const trimmedTitle = title.trim()
    if (!trimmedTitle) return

    onAdd(trimmedTitle, description.trim())
    setTitle('')
    setDescription('')
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <h2>Добавить задачу</h2>
      <label htmlFor="task-title">Название</label>
      <input
        id="task-title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        maxLength={120}
        required
      />
      <label htmlFor="task-description">Описание (необязательно)</label>
      <textarea
        id="task-description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        rows={3}
        maxLength={500}
      />
      <button className="primary-button" type="submit">Добавить задачу</button>
    </form>
  )
}

export default TaskForm
