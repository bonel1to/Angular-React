import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import { useLocalStorage } from './hooks/useLocalStorage.js'
import Home from './pages/Home.jsx'
import NotFound from './pages/NotFound.jsx'
import TaskDetails from './pages/TaskDetails.jsx'
import Tasks from './pages/Tasks.jsx'

const STORAGE_KEY = 'tasks-app:v1'

function createDemoTasks() {
  const now = Date.now()
  return [
    { id: crypto.randomUUID(), title: 'Составить план на неделю', description: 'Выбрать главные приоритеты и распределить время.', done: true, createdAt: new Date(now - 2 * 86400000).toISOString() },
    { id: crypto.randomUUID(), title: 'Прочитать одну главу книги', description: 'Выделить немного времени для себя вечером.', done: false, createdAt: new Date(now - 86400000).toISOString() },
    { id: crypto.randomUUID(), title: 'Разобрать рабочий стол', description: 'Навести порядок в заметках и документах.', done: false, createdAt: new Date(now).toISOString() },
  ]
}

function App() {
  const [tasks, setTasks] = useLocalStorage(STORAGE_KEY, createDemoTasks)

  function addTask(title, description) {
    const newTask = { id: crypto.randomUUID(), title, description, done: false, createdAt: new Date().toISOString() }
    setTasks((currentTasks) => [...currentTasks, newTask])
  }

  function toggleTask(id) {
    setTasks((currentTasks) => currentTasks.map((task) => task.id === id ? { ...task, done: !task.done } : task))
  }

  function deleteTask(id) {
    setTasks((currentTasks) => currentTasks.filter((task) => task.id !== id))
  }

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home tasks={tasks} />} />
        <Route path="/tasks" element={<Tasks tasks={tasks} onAdd={addTask} onToggle={toggleTask} onDelete={deleteTask} />} />
        <Route path="/tasks/:taskId" element={<TaskDetails tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
