import React, {useState} from 'react'

import SayHello from "./components/SayHello"
import StudentView from "./components/StudentView"
import Counter from "./components/Counter"

export default function App() {

  const [city, setCity] = useState("London")
  const [enrolled, setEnrolled] = useState(false)
  const [hobbies, setHobbies] = useState(["coding", "hiking", "cooking"])
  const [newHobby, setNewHobby] = useState("")

  const addHobby = () => {
    if (newHobby.trim() !== "") {
      setHobbies([...hobbies, newHobby])
      setNewHobby("")
    }
  }

  const data = {
    name: "Chris", 
    age: 30,
    city: city,
    hobbies: hobbies,
    enrolled: enrolled,
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

      <button onClick={()=>{setEnrolled(true)}}>Enroll</button>

      <div>
        <h2>Hobbies</h2>
        <ul>
          {hobbies.map((hobby, index) => (<li key={index}>{hobby}</li>))}
        </ul>

        <input 
        type="text"
          value={newHobby}
          onChange={(e)=>{setNewHobby(e.target.value)}}
        />
      </div>

      <button onClick={addHobby}>Add Hobby</button>

    </div>
  )
}
