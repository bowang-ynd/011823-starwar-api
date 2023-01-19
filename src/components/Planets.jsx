import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Planets = () => {
    
    const [planet, setPlanet] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    const fetchPlanet = () => {
        axios.get(`https://swapi.dev/api/planets/${id}/`)
            .then( res => setPlanet(res.data) )
            .catch( _ => navigate("/NotFound/") );
    };

    useEffect( () => { fetchPlanet() }, [id]);
    
    return (
        <div className='container center'>
            {
                planet ? 
                    <div>
                        <h2>{ planet.name }</h2>
                        <ul>
                            <li>Climate: { planet.climate }</li>
                            <li>Terrain: { planet.terrain }</li>
                            <li>Surface Water: { planet.surface_water }</li>
                            <li>Population: { planet.population }</li>
                        </ul>
                    </div> : 
                    navigate("/NotFound/")
            }
        </div>
    )
}

export default Planets