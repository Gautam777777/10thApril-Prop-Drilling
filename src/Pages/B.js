import React from 'react'
import C from './C'

export default function B(props) {
  return (
    <>
        <h1>B Component {props.n1}</h1>
        {console.log("props --->",props)}
        <C n2={props.n1}></C>
    </>
  )
}
