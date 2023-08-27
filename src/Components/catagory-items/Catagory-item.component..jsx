const CatagoryItem = function ({ id, title, imageUrl }) {
  return (
    <section key={id} className='category-container'>
      {/* In order to have inline css on a JSX element, we can do that with `style` props and double curly brackets. */}
      <div className='background-image' style={{ backgroundImage: `url(${imageUrl})` }} />
      <section className='category-body-container'>
        <h2 className='product-title'>{title}</h2>
        <p>Shop Now</p>
      </section>
    </section>
  )
}

export default CatagoryItem;