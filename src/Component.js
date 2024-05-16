import React, { useState } from 'react'

export default function Component() {
  const [text, setText] = useState();
  const [updated, setupdated] = useState();

  const textOnChange = (event)=>{
    setText(event.target.value);
  }
  const butoonOnClick= ()=>{
    setupdated(text);
  }

  return (
    <div>
      <input type="text" value={text} onChange={textOnChange} />
      <button onClick={butoonOnClick}>Actualizacion</button>
      <p>Texto input: {text} </p>
      <p>Texto Actualizado: {updated} </p>
    </div>
  )
}
