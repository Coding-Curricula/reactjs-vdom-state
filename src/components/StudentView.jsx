import React from 'react'

import ClassSchedules from "./ClassSchedules"

export default function StudentView(props) {

    console.log("StudentView props", props  )
  return (
    <div>
        <h2>Student Information</h2>
        <p>Name: {props.data.name}</p>
        <p>Age: {props.data.age}</p>
        <p>City: {props.data.city}</p>
        <p>Hobbies: {props.data.hobbies.join(", ")}</p>
        <p>Enrolled: {props.data.enrolled ? "Yes" : "No"}</p>
        <h3>Class Schedules:</h3>
        {/* <ClassSchedules schedules={props.data.classSchedules} /> */}
    </div>
  )
}
