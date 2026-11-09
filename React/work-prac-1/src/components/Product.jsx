const rubles = new Intl.NumberFormat('ru-RU', {
  style: 'currency',
  currency: 'RUB',
})

function Product({ title, price, discount = 0 }) {
  const discountedPrice = price * (1 - discount / 100)

  return (
    <article className="card">
      <h3>{title}</h3>
      <p>Цена: {rubles.format(discountedPrice)}</p>
      {discount > 0 && (
        <>
          <p>Старая цена: <s>{rubles.format(price)}</s></p>
          <p>Скидка: {discount}%</p>
        </>
      )}
    </article>
  )
}

export default Product
