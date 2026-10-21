import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <main className="not-found-page">
      <h1>404</h1>
      <p>Страница не найдена.</p>
      <Link to="/">На главную</Link>
    </main>
  )
}

export default NotFound
