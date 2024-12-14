
import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, deleet, edit } from '../Redux/Toolkit/Counter/Counter'

const Toolkit = () => {
    const state=useSelector((state)=>state.todostate.todo)
    const dispatch=useDispatch()
    const [title,settitle]=useState("")
    const [editid,seteditid]=useState()
    const [editing,setediting]=useState("")
const textvalues=(evt)=>{
if(editid){
    setediting(evt.target.value)

}else{
    settitle(evt.target.value)
}
}
 const addtext=()=>{
        if(editid){
            dispatch(edit({editid,editing}))
            setediting("")
            seteditid(null)
        }else{
            dispatch(add(title))
            settitle("")
        }
    
    }
    const edittitle=(id,text)=>{
seteditid(id)
setediting(text)
    }
  return (
    <div>
      <input type="text" value={editid?editing:title} onChange={(evt)=>textvalues(evt)} />
      <button onClick={addtext}>{editid?"save":"add"}</button>
      {state.map((curr)=>(
        <ul key={curr.id}>
            <li>{curr.text}</li>
            <button onClick={()=>dispatch(deleet(curr.id))}>deleet</button>
            <button onClick={()=>edittitle(curr.id,curr.text)}>edit</button>
          
        </ul>
      ))}
    </div>
  )
}

export default Toolkit


