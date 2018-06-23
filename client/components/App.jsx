import React from 'react'
import Circle from './Circle'

const App = props => {
  width = window.innerWidth
  height = window.innerHeight

  const circle = {
    cx: props.width / 2,
    cy: props.height / 2,
    level: 0,
    r: 256
  }

  return (
    <svg width={width} height={height}>
      <Circle circle={circle} />
    </svg>
  )
}

export default App
