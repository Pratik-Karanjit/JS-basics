import React from 'react'
import Bottom from './Bottom'

const Mid = (props) => {
  return (
    <div>
        {/* Taking the message from prop which comes in object so we parse it and take props.variable name */}
        <Bottom name={props.name}></Bottom>
    </div>
  )
}

export default Mid