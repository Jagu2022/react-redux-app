import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { inc, dec, res } from './counterSlice'

function Counter() {
  const count = useSelector(state => state.count.count)
  console.log(count)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(inc())}>inc</button>
      <button onClick={() => dispatch(dec())}>dec</button>
      <button onClick={() => dispatch(res())}>res</button>
    </div>
  )
}

export default Counter