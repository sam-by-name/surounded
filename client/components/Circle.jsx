import React from 'react'
import {getColor} from '../color'

class Circle extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      children: []
    }
    this.handleClick = this.handleClick.bind(this, props.circle)
  }
  handleClick (eventedCircle) {
    const children = []
    const {cx, cy, r} = eventedCircle
    const level = eventedCircle.level + 1

    children.push(
      {cx: cx, cy: cy - r, r: r / 2, level},
      {cx: cx, cy: cy + r, r: r / 2, level},
      {cx: cx + r, cy: cy, r: r / 2, level},
      {cx: cx - r, cy: cy, r: r / 2, level}
    )
    this.setState({children})
  }
  render () {
    const {cx, cy, r, level} = this.props.circle
    const color = getColor(level)

    return (
      <g>
        <circle cx={cx} cy={cy} r={r} fill={color} onMouseOver={this.handleClick} />
        {this.state.children.map((circle, i) => {
          return <Circle key={i} circle={circle} />
        })}
      </g>
    )
  }
}

export default Circle
