import React from 'react'
import D from './D'

export default function C({n2}) {
  return (
    <>
        <h1>C Component {n2}</h1>
        {console.log("n2 --->",n2)}
        <D n3={n2}></D>
    </>
  )
}
