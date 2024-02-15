import React,{useContext, useEffect, useState} from 'react'
import { userContext } from '../App'
import axios from 'axios';
export default function Home() {
const [count ,setCount] =  useState(0)
const [count1 ,setCount1] =  useState()

useEffect(() => {
 async function getData() {
    const res = await axios.get(' https://pokeapi.co/api/v2/pokemon/')
    setCount1(res.data.results[0].url)
 }
 getData()
});
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
    <p>{count1}</p>
    <a href= {count1} >link</a>
    <input type="number" readOnly disabled  value={count}  name="" id=""/>
    <button type="submit" onClick={minusHandler}>Minus</button>
    <button type="submit" onClick={addHandler}>Add</button>
    </>
  )
}
