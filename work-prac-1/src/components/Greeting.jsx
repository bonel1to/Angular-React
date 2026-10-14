function Greeting({ name, greeting = 'Привет' }) {
  const displayName = typeof name === 'string' && name.trim() ? name.trim() : 'гость'

  return <p>{greeting}, {displayName}!</p>
}

export default Greeting
