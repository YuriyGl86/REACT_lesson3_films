import React from 'react'
import { Star } from '../Star'


export  function Stars({ count }) {
  const stars = [...Array(count).keys()]
  return (

    <ul className="card-body-stars u-clearfix">
      {stars.map((_) => (
        <Star/>
      ))}
    </ul>
  )
}
