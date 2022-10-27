import React from 'react'

function CardCategory({ category }) {
  return (
    <div className="card-category">
      <img src={category.strCategoryThumb} alt="" className="img-category" />
      <div className="card-content">
        <h3 class="title">{category.strCategory}</h3>
        <p>{category.strCategoryDescription}</p>
      </div>
    </div>
  )
}

export default CardCategory
