import React from 'react'
import Todoitem from './Todoitem'

const Todolist = (props) => {
  const activityArr= props.activityArr;
  const setactivityArr=props.setactivityArr;
  
  return (
    <>
      <div className='bg-[#BDB4EA] border rounded-md p-2 grow-1'>
        <h1 className='text-2xl font-medium'>Today's Activity</h1>
        {activityArr.length===0?
        (<p>You haven't added any activity</p>):
        (
          activityArr.map((item,index)=>{
           return <Todoitem  key={item.id || index} item={item} index={index} id={item.id} activityArr={activityArr} setactivityArr={setactivityArr}/>

          })
        )
      }
        </div>
    </>
  )
}

export default Todolist

