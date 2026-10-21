import { useNavigate } from 'react-router-dom'

function Home({ tasks }) {
  const navigate = useNavigate()
  const completed = tasks.filter((task) => task.done).length
  const active = tasks.length - completed

  return (
    <div className="home-page">
      <h2>Главная</h2>
      <p>Добро пожаловать в приложение «Мои задачи».</p>
      <ul className="stats-list">
        <li><span>Всего задач</span><strong>{tasks.length}</strong></li>
        <li><span>Выполнено</span><strong>{completed}</strong></li>
        <li><span>Активно</span><strong>{active}</strong></li>
      </ul>
      <button className="primary-button" onClick={() => navigate('/tasks')}>Перейти к задачам</button>
    </div>
  )
}

export default Home
