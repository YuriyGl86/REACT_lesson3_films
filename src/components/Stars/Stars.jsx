import React from 'react'
import { Star } from '../Star'
const { v4 } = require('uuid');  


export  function Stars({ count }) {
  if (count >5 || count <1){return}
  const stars = [...Array(count).keys()]
  return (

    <ul className="card-body-stars u-clearfix">
      {stars.map((_) => (
        <Star key={v4()}/>
      ))}
    </ul>
  )
}
