function Card({ title, children }) {
  return (
    <article className="content-card">
      <h3>{title}</h3>
      <div className="content-card__body">{children}</div>
    </article>
  )
}

export default Card
