import React from 'react'

const Todoitem = (props) => {
  const activityArr=props.activityArr;
  const setactivityArr=props.setactivityArr;

    function handleClick(deleteid)
      {
       var temparr=activityArr.filter(function(item){
   
        if(item.id === deleteid){
          return false
        }
        else{
          return true
        }

        })
        setactivityArr(temparr)
        
    }

   
  return (
    <div className='flex justify-between'>
    <p key={props.index}>{props.item.id}.{props.item.activity}</p>
    <button className='text-red-400 p-1.5 bg-amber-50 m-1 border rounded-2xl' onClick={()=>handleClick(props.id)}>Delete</button>
     
    </div>
  )
}

export default Todoitem
