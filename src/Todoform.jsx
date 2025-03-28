import React, { useState } from 'react'

const Todoform = (props) => {
  const activityArr= props.activityArr;
  const setactivityArr=props.setactivityArr;
  const [newactivity, setnewactivity] = useState("")

  function handleChange(evt){
setnewactivity(evt.target.value)
  }
  function addActivity(){
setactivityArr([...activityArr,{id:activityArr.length+1,activity:newactivity}])
  }
  return (
    <>
    <div className='flex flex-col gap-3'>
        <h1 className='text-2xl font-medium'>Manage Activities</h1>
        <div>
        <input value={newactivity}  type="text" className='border border-black bg-transparent text-2xl ' placeholder='Next Activity' onChange={handleChange}/>
        <button className=' pt-2 px-1.5 py-0.5 text-amber-50  bg-stone-950 border-black m-1' onClick={addActivity}>Add</button>
        </div>
       </div>
    </>
  )
}

export default Todoform
