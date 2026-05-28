import React from 'react'

export default function SayHello(props) {
    console.log("props", props )


  return (
    <div>Hiiiiiii {props.name}</div>
  )
}
