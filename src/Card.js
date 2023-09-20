import React from 'react'

function Card({name,roll}) {
    
  return (
    <div>
        <h1>{name}</h1>
        <p>{roll}</p>
    </div>
  )
}

export default Card