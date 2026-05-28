import React from 'react'

export default function ClassSchedules(props) {
console.log("ClassSchedules props", props )

  return (
    <div>
        <p>Monday: {props.schedules.monday}</p>
        <p>Tuesday: {props.schedules.tuesday}</p>
        <p>Wednesday: {props.schedules.wednesday}</p>
        <p>Thursday: {props.schedules.thursday}</p>
        <p>Friday: {props.schedules.friday}</p>
    </div>
  )
}
