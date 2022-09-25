import React from 'react'
import { useState } from 'react'

function Todolist() {
    const [activity , setactivity] = useState("");
    const [listdata , setlistdata] = useState([])
    function addActivity (){
    
        activity  &&
        setlistdata((listdata)=>{
            const updatedlist =[...listdata , activity]
            setactivity("")
            console.log(updatedlist)
            return updatedlist
        })
    }
    function removeActivity(i){
        
      const updatedlistdata = listdata.filter((elem,index)=>{
        return i !== index;
        })
      setlistdata(updatedlistdata)
    }
    function removeall(){
        setlistdata([])
    }
   
  return (
    <>
    <div className="container">
        <div className="header">To-Do List</div>
        <input type="text"placeholder='Add Activity'value={activity} onChange={(e)=>setactivity(e.target.value) } required />
        <button id='a' onClick={addActivity}>Add Activity</button>
        <p className="List-heading">Yours activity</p>
       { listdata !==[] && listdata.map((data,i)=>{
            return(
                <>
                <p key={i}>
                    <div className='listData'>{data}</div>
                   <div className="btn-position"> <button id='b' onClick={ ()=>removeActivity(i)}>Delete</button></div>
                </p>
                </>
            )
        })
    }
    {listdata.length>1 &&  <button id='c' onClick={removeall}>Delete All</button>}
     
    </div>
    </>
  )
}

export default Todolist