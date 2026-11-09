import { NavLink, Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className="app">
      <header>
        <h1>Мои задачи</h1>
        <nav aria-label="Основная навигация">
          <NavLink end to="/" className={({ isActive }) => isActive ? 'active' : ''}>Главная</NavLink>
          {' | '}
          <NavLink to="/tasks" className={({ isActive }) => isActive ? 'active' : ''}>Задачи</NavLink>
        </nav>
      </header>
      <main><Outlet /></main>
    </div>
  )
}

export default Layout
