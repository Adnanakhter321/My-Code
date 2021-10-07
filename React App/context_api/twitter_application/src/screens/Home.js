import React, {  useEffect } from 'react';
import { useHistory } from 'react-router';
import { auth, signOut, onAuthStateChanged } from '../configs/firebase'
function AnimalAPI() {

    // if user logout they cant switch home page 
    let history = useHistory()
    
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (!user) {
                history.push('/signin')
            }
        })

    }, [history])
    //------------------------------------------------

    //LOGOut FUnctions
    const Logout = async () => {
        try {
            await signOut(auth);
            console.log('LogOUt Succesful');
            history.push("/signin")
        }
        catch (er) {
            console.log(er.message);
        }
    }

    return (
        <div className='container my-3' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ marginLeft: 'auto' }}>
                <button className="btn btn-primary" onClick={Logout}>Logout</button></div>
            <h3>Hello Home</h3>
        </div>
    );
}

export default AnimalAPI;

