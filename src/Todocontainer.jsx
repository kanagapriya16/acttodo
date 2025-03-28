import React, { useState } from "react";
import Todoform from "./Todoform";
import Todolist from "./Todolist";

const Todocontainer = () => {
  const [activityArr, setactivityArr] = useState([
    {
      id:1,
      activity:"Go for walk"
    },
    {
      id:2,
      activity:"Eat cheese cake"
    },
    {
      id:3,
      activity:"Go run go"
    }
      ])
  return (
    <>
      <div className="flex gap-5 flex-wrap">
        <Todoform activityArr={activityArr} setactivityArr={setactivityArr}/>
        <Todolist activityArr={activityArr} setactivityArr={setactivityArr}/>
      </div>
    </>
  );
};

export default Todocontainer;
