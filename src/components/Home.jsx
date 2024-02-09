import React,{useState} from 'react'
export default function Home() {
  const onChanged=(e)=>{
 setCount(e.target.value)
  }
  const onAdd=(e)=>{
    setCount(count+1)
  }
  const onMinus=()=>{
    setCount(count-1)
  }
  const [count, setCount] = useState(0);
  
  return (
    <>
    <input type="number" onChange={onChanged} name="" id="" value={count} />
    <button type="submit" onClick={onMinus}>Minus</button>
    <button type="submit" onClick={onAdd}>Add</button>
    </>
  )
}
