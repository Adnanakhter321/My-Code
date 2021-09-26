import React, { useEffect, useState } from 'react';
import axios from 'axios';

const URL = 'https://api.publicapis.org/entries';


function FreeAPI() {
    const [animalData, setAnimalData] = useState([]);

    let func = async () => {
        let { data } = await axios.get(URL);
        setAnimalData(data.entries);
    }

    useEffect(() => {
        func();
    }, []);

    return (
        animalData.map(({ Category, Description, Link }, keys) => {
            return (
                <>
                    <div key={Category + keys}>
                        <h1>{Category}</h1>
                        <h3> <a href={Link} target='_blank' rel="noreferrer">{Description}</a></h3>
                    </div>
                </>
            )
        })
    )
}

export default FreeAPI;