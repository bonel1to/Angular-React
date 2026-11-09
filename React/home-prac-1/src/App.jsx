const userName = 'Сергей'
const userAge = 19
const isStudent = true
const skills = ['JavaScript', 'HTML', 'CSS']
const currentYear = new Date().getFullYear()

function App() {
  const birthYear = currentYear - userAge

  return (
    <main>
      <section className="exercise-section">
        <p className="section-label">Практика 1 · JSX</p>

        {/* Вставка переменной */}
        <h1>Привет, {userName}!</h1>

        {/* Выражение */}
        <p>Тебе {userAge} лет. Ты родился в {birthYear} году.</p>

        {/* Условное выражение */}
        <p>Статус: {isStudent ? 'Студент' : 'Работает'}</p>

        {/* Стиль задаётся объектом JavaScript */}
        <p style={{ color: 'blue', fontWeight: 'bold' }}>
          Это синий жирный текст
        </p>

        {/* Для CSS-класса в JSX используется className */}
        <div className="card">
          <h2>Навыки:</h2>
          <ul>
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      </section>

    </main>
  )
}

export default App
