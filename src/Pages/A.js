import React from 'react'
import B from './B'

export default function A({name}) {  //{} = destructuring / Extracting information
    //2.1 Hooks Area

    //2.2 Function Defination Area

    //2.3 Return statement
  return (
    <>
        <h1>A Component {name}</h1>
        {console.log("name --->",name)}
        <B n1={name}></B>
    </>
  )
}
