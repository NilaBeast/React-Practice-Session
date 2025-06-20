import React, { useState } from 'react'

function products() {
    const [a, b] = useState(false);
  return (
    <div className='text-white w-full h-60 bg-zinc-500'>
        <h4 className={ `${a === false ? "text-red-600" : "text-blue-600"}`}>{a === false ? "hello" : "hey"}</h4>
        <button onClick={()=> b(!a)}>change</button>
    </div>
  )
}

export default products