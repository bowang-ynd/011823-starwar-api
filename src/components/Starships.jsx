import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Starships = () => {
    
    const [starship, setStarship] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    const fetchStarship = () => {
        axios.get(`https://swapi.dev/api/starships/${id}/`)
            .then( res => setStarship(res.data) )
            .catch( _ => navigate("/NotFound/") );
    };

    useEffect( () => { fetchStarship() }, [id]);
    
    return (
        <div className='container center'>
            {
                starship ? 
                    <div>
                        <h2>{ starship.name }</h2>
                        <ul>
                            <li>Model: { starship.model }</li>
                            <li>Manufacture: { starship.manufacture }</li>
                            <li>Crews: { starship.crew }</li>
                            <li>Passengers: { starship.passengers }</li>
                        </ul>
                    </div> : 
                    navigate("/NotFound/")
            }
        </div>
    )
}


export default Starships