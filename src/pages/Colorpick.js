import React from 'react'
import '../assets/style.css'
import { useState } from 'react'
function Colorpick() {

  const [color, setColor] = useState("");

  return (
    <>

      <div className='box' style={{ backgroundColor: color }}></div>
      <br/>
      <div className='inputBox'>
        <input type='text' onChange={(e) => { setColor(e.target.value)}}/>
      </div>
      
    </>
  )
}
export default Colorpick








