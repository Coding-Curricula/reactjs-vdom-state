import React from 'react'

import SayHello from "./components/SayHello"
import StudentView from "./components/StudentView"
import Counter from "./components/Counter"

export default function App() {

  const data = {
    name: "Chris", 
    age: 30,
    city: "New York",
    hobbies: ["coding", "hiking", "cooking"],
    enrolled: true,
    classSchedules: {
      monday: "Math",
      tuesday: "Science",
      wednesday: "History",
      thursday: "Art",
      friday: "Physical Education"
    }
  }

  return (
    <div>
      {/* <Counter />

      {/* <SayHello name="Mom" />
            <SayHello name="Dad" />

      <SayHello name="Sister" />

      <SayHello name="Brother" />

      <SayHello name="Timmy" /> */}

      <StudentView data={data} />

    </div>
  )
}
