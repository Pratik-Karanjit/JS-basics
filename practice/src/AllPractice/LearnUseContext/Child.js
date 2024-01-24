import React, { useContext } from 'react'
import { Context } from '../../App'

const Child = () => {
  let value = useContext(Context)

  return (
    <div>
      Child name is {value.name}
      <br></br>
      age is {value.age}
    </div>
  )
}

export default Child