import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router'
import { GlobalContext } from '../context/context'

const MyDetails = () => {
    const { state } = useContext(GlobalContext)
    let history = useHistory();
    useEffect(() => {
        if (!state.authUser.role && state.authUser.role !== 'student') {
            history.goBack();
        }
    });

return (
<div className="card text-center container my-5">
<div className="card-header">
    Your Result
</div>
<div className="card-body">
{
    state.allStudents.map((el, keys) => {
        if (state.authUser.email === el.email) {
            return (
                <div key={keys}>
                    {console.log(el.name)}
                    <h4 className="card-title d-inline">Name: <p className='d-inline h5'>{el.name}</p></h4><h4 className="card-text">Email: <p className='d-inline h5'>{el.email}</p></h4><h4 className="card-text">Roll-No: <p className='d-inline h5'>{el.rollNo}</p></h4><h4 className="card-text">Total Marks: <p className='d-inline h5'>{el.totalMarks}</p></h4><h4 className="card-text">Feedback: <p className='d-inline h5'>{el.feedback}</p></h4><a href="/" className="btn btn-primary">Grade A</a> </div>
            )
        }
        return null;
    })
}
</div>

</div>
)
}

export default MyDetails
