import { useState } from 'react';

const dateFormatter = new Intl.DateTimeFormat('ru-RU', {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
});

// Один элемент списка. Принимает:
//   todo — объект задачи
//   onToggle — переключить done
//   onDelete — удалить
//   onEdit — сохранить новое название
function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  // Локальное состояние редактирования — НЕ нужно родителю
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  // Цвет левой полоски по приоритету
  const priorityColors = {
    low: '#10b981',
    medium: '#f59e0b',
    high: '#ef4444',
  };

  function handleSave() {
    const trimmed = editText.trim();
    if (trimmed) {
      onEdit(todo.id, trimmed);
    }
    setIsEditing(false);
  }

  function handleCancel() {
    setEditText(todo.text); // откатываем изменения
    setIsEditing(false);
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') handleSave();
    if (e.key === 'Escape') handleCancel();
  }

  return (
    <li
      className="todo-item"
      style={{ borderLeft: `4px solid ${priorityColors[todo.priority]}` }}
    >
      <input
        className="todo-item__checkbox"
        type="checkbox"
        checked={todo.done}
        onChange={() => onToggle(todo.id)}
        aria-label={`Отметить задачу «${todo.text}» как выполненную`}
      />

      {/* Условный рендер: редактируем или показываем текст */}
      {isEditing ? (
        <input
          className="todo-item__edit"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onKeyDown={handleKeyDown}
          autoFocus
        />
      ) : (
        <span
          className="todo-item__text"
          onDoubleClick={() => setIsEditing(true)}
          style={{
            cursor: 'pointer',
            textDecoration: todo.done ? 'line-through' : 'none',
            color: todo.done ? '#999' : '#1e293b',
          }}
        >
          {todo.text}
        </span>
      )}

      <time className="todo-item__date" dateTime={todo.createdAt}>
        {dateFormatter.format(new Date(todo.createdAt))}
      </time>

      {/* Кнопки: показать в режиме редактирования, иначе — удалить */}
      <div className="todo-item__actions">
        {isEditing ? (
          <>
            <button type="button" onClick={handleSave} aria-label="Сохранить задачу" style={{ cursor: 'pointer' }}>
              💾
            </button>
            <button type="button" onClick={handleCancel} aria-label="Отменить редактирование" style={{ cursor: 'pointer' }}>
              ✖️
            </button>
          </>
        ) : (
          <button
            type="button"
            onClick={() => onDelete(todo.id)}
            aria-label={`Удалить задачу «${todo.text}»`}
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              fontSize: 18,
              color: '#ef4444',
            }}
          >
            ✕
          </button>
        )}
      </div>
    </li>
  );
}

export default TodoItem;
