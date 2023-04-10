import React from 'react'
import Z from './Z'

export default function D(props) {
  return (
    <>
        <h1>D Component {props.n3}</h1>
        <Z n4={props.n3}></Z>
    </>
  )
}
