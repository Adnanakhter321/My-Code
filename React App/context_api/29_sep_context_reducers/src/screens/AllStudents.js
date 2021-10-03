import React, { useContext } from 'react'
import { GlobalContext } from '../context/context'


const Users = () => {
    const { state } = useContext(GlobalContext)
        return (
        <table className="table table-striped container my-5">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Roll-No</th>
                    <th scope="col">Total Marks</th>
                    <th scope="col">Feedback</th>
                </tr>
            </thead>
            <tbody>
                {state.allStudents.map((el, keys) => {
                    return (
                        <tr key={keys}>
                            <th scope="row">{el.name}</th>
                            <td>{el.email}</td>
                            <td>{el.rollNo}</td>
                            <td>{el.totalMarks}/500</td>
                            <td>{el.feedback}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
       
    )
}
export default Users;

