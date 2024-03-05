import React from 'react'
import { Header } from './component/Header'
import Input from './component/Input'
import Result from './component/Result'
import {useState} from 'react'

const App = () => {
  let[ans,setans]=useState({});
  function List(txt,dte)
  {
    // console.log(txt);
    // console.log(dte);
    let obj={
      a:txt,
      b:dte
    }
    setans(obj);
   // console.log(obj);
  }
  return (
    <div>
      <Header/>
      <Input List={List}/>
      <Result detail={ans}/>
      
    </div>
  )
}

export default App