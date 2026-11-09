function Avatar({ name, size = 48 }) {
  return (
    <div
      role="img"
      aria-label={`Аватар пользователя ${name}`}
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        backgroundColor: '#7c3aed',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: size / 2,
        fontWeight: 700,
      }}
    >
      {name[0].toLocaleUpperCase('ru-RU')}
    </div>
  )
}

export default Avatar
