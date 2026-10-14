import Avatar from './components/Avatar.jsx'
import Button from './components/Button.jsx'
import Card from './components/Card.jsx'
import Greeting from './components/Greeting.jsx'
import Product from './components/Product.jsx'

const userName = 'Сергей'

function App() {
  return (
    <main>
      <h1>Рабочая практика 1</h1>

      <section className="exercise-section exercise-section--greeting">
        <h2>Задача 1 · Greeting</h2>
        <div className="greeting-examples">
          <Greeting name="Иван" />
          <Greeting name={userName} greeting="Добрый день" />
          <Greeting />
        </div>
      </section>

      <section className="exercise-section exercise-section--product">
        <h2>Задача 2 · Product</h2>
        <div className="product-examples">
          <Product title="Наушники" price={3000} discount={20} />
          <Product title="Книга" price={850} />
        </div>
      </section>

      <section className="exercise-section exercise-section--avatar">
        <h2>Задача 3 · Avatar</h2>
        <div className="avatar-examples">
          <div className="avatar-example">
            <Avatar name="Иван" size={32} />
            <span>32 px</span>
          </div>
          <div className="avatar-example">
            <Avatar name="Мария" />
            <span>48 px</span>
          </div>
          <div className="avatar-example">
            <Avatar name="Сергей" size={80} />
            <span>80 px</span>
          </div>
        </div>
      </section>

      <section className="exercise-section exercise-section--card">
        <h2>Задача 4 · Card</h2>
        <div className="card-examples">
          <Card title="О проекте">
            <p>Здесь мы учимся собирать интерфейс из React-компонентов.</p>
          </Card>

          <Card title="План практики">
            <ul>
              <li>Создать компоненты</li>
              <li>Передать им пропсы</li>
              <li>Проверить результат</li>
            </ul>
            <button type="button" onClick={() => window.alert('План проверен!')}>
              Проверить план
            </button>
          </Card>
        </div>
      </section>

      <section className="exercise-section exercise-section--button">
        <h2>Задача 5 · Button</h2>
        <div className="button-examples">
          <Button onClick={() => window.alert('Основная кнопка нажата!')}>
            Primary
          </Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="danger" onClick={() => window.alert('Нажата кнопка Danger!')}>
            Danger
          </Button>
          <Button disabled onClick={() => window.alert('Это сообщение не появится')}>
            Disabled
          </Button>
        </div>
      </section>
    </main>
  )
}

export default App
