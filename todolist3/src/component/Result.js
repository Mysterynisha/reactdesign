import React from 'react'

const Result = ({detail}) => {
    console.log(detail);
  return (
    <div>
     <p>{detail.a}</p> 
     <p>{detail.b}</p> 
    </div>
  )
}

export default Result