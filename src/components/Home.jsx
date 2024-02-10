import React,{useContext, useEffect, useState} from 'react'
import { userContext } from '../App'
export default function Home() {
const [count ,setCount] =  useState(0)
let minusHandler = ()=>{
  setCount(count-1)
}
let addHandler = ()=>{
  setCount(count+1)
}
useEffect(() => {
  // Update the document title using the browser API
  document.title = `You clicked ${count} times`;
},[count]);


  return (
    <>
    <input type="number" readOnly disabled  value={count}  name="" id=""/>
    <button type="submit" onClick={minusHandler}>Minus</button>
    <button type="submit" onClick={addHandler}>Add</button>
    </>
  )
}
