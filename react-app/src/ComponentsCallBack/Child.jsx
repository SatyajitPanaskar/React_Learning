import React,{useState} from 'react'

function Child(props) {  
    const sendData = () => {
        const data = "hello Child Data"
        props.sendData(data)
    }
   
  return (
      <>
          <h2> This is Child Page </h2>
          <button onClick={sendData}> ChildTOParent</button>
      </>
  )
}

export default Child