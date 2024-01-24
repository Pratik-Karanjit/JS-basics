import React, { useContext } from 'react'
import { Context } from '../../App'

const Parent = () => {
  //Get the context provided from store useContext(name of store)
  let value = useContext(Context)
  console.log(value)
  return (
    <div>
     Parent name is {value.name}
     <br>
     </br>
     Age is {value.age}
    </div>
  )
}

export default Parent