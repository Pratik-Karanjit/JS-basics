import React, { createContext } from 'react'

export let Context = createContext()

const LearnUseContext = () => {
    let name = "John Smith"

  return (
    <div>
        <Context.Provider value={name}>
            <Parent></Parent>
        </Context.Provider>
    </div>
  )
}

export default LearnUseContext