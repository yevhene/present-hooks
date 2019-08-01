import React, {
  useEffect, useState,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED as ReactSharedInternals
} from 'react'

const ParentComponent = () => {
  const fiber = ReactSharedInternals.ReactCurrentOwner.current

  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log('Hello')
    return () => console.log('Goodbye')
  }, [])
  useState('myVar')

  return (
    <>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <br />
      <code>fiber._debugHookTypes: {fiber._debugHookTypes && fiber._debugHookTypes.join(', ')}</code>
      <br />
      <code>fiber.memoizedState: { fiber.memoizedState && fiber.memoizedState.memoizedState }</code>
      <br />
      <code>fiber.memoizedState.next: { fiber.memoizedState && fiber.memoizedState.next.memoizedState.create.toString() }</code>
      <br />
      <code>fiber.memoizedState.next.next: { fiber.memoizedState && fiber.memoizedState.next.next.memoizedState }</code>
    </>
  )
}

export default ParentComponent
