import React from 'react'

export default props => {
  return <h2>{Math.random() * (props.max - props.min) + props.min}</h2>
}
