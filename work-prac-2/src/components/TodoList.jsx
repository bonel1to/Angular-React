import TodoItem from './TodoItem';

function TodoList({ todos, onToggle, onDelete, onEdit }) {
  // Обработка пустого состояния
  if (todos.length === 0) {
    return (
      <p style={{ textAlign: 'center', color: '#999', padding: 40 }}>
        Здесь пусто 🎉
      </p>
    );
  }

  return (
    <>
      <div className="todo-list-header" aria-hidden="true">
        <span />
        <span>Задача</span>
        <span>Дата создания</span>
        <span />
      </div>
      <ul className="todo-list">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
      </ul>
    </>
  );
}

export default TodoList;
