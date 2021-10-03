import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/context'

const AddStudents = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [rollno, setRollno] = useState("")
    const [totalmarks, setTotalMarks] = useState("")
    const [feedback, setFeedback] = useState("")
    const { dispatch } = useContext(GlobalContext)

    const AddStudent = () => {
        let data = {
            name: name,
            email: email,
            rollNo: rollno,
            totalMarks: totalmarks,
            feedback: feedback
        }
        dispatch({ type: "ADD_STUDENT", payload: data })
    }

    return (
        <div className="container" style={{ display: 'flex', justifyContent: 'center', maxWidth: '35rem', flexDirection: "column", height: "70vh" }}>
            <div className="form-group py-3">
                <label htmlFor="exampleInputEmail1">Name</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name" value={name} onChange={(ev) => { setName(ev.target.value) }} />

            </div>
            <div className="form-group py-3">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={email} onChange={(ev) => { setEmail(ev.target.value) }} />
            </div>
            <div className="form-group py-3">
                <label htmlFor="exampleInputPassword1">Roll No</label>
                <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Roll No"
                    value={rollno} onChange={(ev) => { setRollno(ev.target.value) }}
                />
            </div>
            <div className="form-group py-3">
                <label htmlFor="exampleInputPassword1">Total Marks</label>
                <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Total Marks"
                    value={totalmarks} onChange={(ev) => { setTotalMarks(ev.target.value) }}
                />
            </div>
            <div className="form-group py-3">
                <label htmlFor="exampleInputPassword1">FeedBack</label>
                <input type="text" className="form-control" id="exampleInputPassword1" placeholder="FeedBack"
                    value={feedback} onChange={(ev) => { setFeedback(ev.target.value) }}
                />
            </div>
            <button onClick={AddStudent} className="btn btn-primary">Add Student</button>
        </div>
    )
}

export default AddStudents
