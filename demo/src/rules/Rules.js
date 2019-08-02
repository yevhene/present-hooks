import React, { useState } from 'react'

function Rules() {
  const [toggle, setToggle] = useState(true)

  let a
  let b
  if (toggle) {
    a = useState(8)
    b = useState('Hello')
  } else {
    b = useState(true)
    a = useState(28)
  }

  return (
    <>
      <h1>a: {a[0]}</h1>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      <h3>b: {b[0]}</h3>
    </>
  )
}

export default Rules
